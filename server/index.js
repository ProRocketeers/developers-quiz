import { createServer as createViteServer } from 'vite'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT) || 5173

const distPath = path.resolve(__dirname, '../dist')

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
}

const getContentType = (filePath) =>
  mimeTypes[path.extname(filePath)] || 'application/octet-stream'

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(payload))
}

const readBody = async (req) => {
  const chunks = []
  for await (const chunk of req) {
    chunks.push(chunk)
  }

  if (chunks.length === 0) {
    return null
  }

  const data = Buffer.concat(chunks).toString('utf-8')
  return JSON.parse(data)
}

const sendEmail = async ({
  to,
  name,
  score,
  total,
  passed,
  detailed = false,
  questions,
  answers
}) => {
  const percentage = Math.round((Number(score) / Number(total)) * 100)

  let questionsText = ''
  if (Array.isArray(questions) && answers) {
    if (detailed) {
      questionsText = questions
        .map((question, index) => {
          const userAnswerIndex = answers[index]
          const isCorrect = userAnswerIndex === question.correctAnswer
          const optionsText = question.options
            .map((option, optionIndex) => {
              const isUserAnswer = optionIndex === userAnswerIndex
              const icon = isUserAnswer ? (isCorrect ? ' ✅' : ' ❌') : ''
              return `   - ${option}${icon}`
            })
            .join('\n')
          return `${index + 1}. ${question.question}\n${optionsText}`
        })
        .join('\n\n')
    } else {
      questionsText = questions
        .map((question, index) => {
          const userAnswerIndex = answers[index]
          const isCorrect = userAnswerIndex === question.correctAnswer
          return `${index + 1}. ${question.question} ${isCorrect ? '✅' : '❌'}`
        })
        .join('\n')
    }
  }

  const subject = `TEST | Výsledky | Java Developer Quiz | ${name} - ${passed ? 'PROŠEL' : 'NEPROŠEL'} (${percentage}%)`
  const text = `
Ahoj ${name},

TEST | Výsledky | Java Developer Quiz | ${name} - ${score}/${total} (${percentage}%)
Status: ${passed ? 'PROŠEL ✅' : 'NEPROŠEL ❌'}

${questionsText ? `Přehled odpovědí:\n\n${questionsText}` : ''}

Děkujeme za účast!
Prorocketeers
  `.trim()

  const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com'

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }], subject }],
      from: { email: fromEmail },
      content: [{ type: 'text/plain', value: text }]
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText)
  }
}

const requestHandler = (vite) => async (req, res) => {
  const url = new URL(req.url || '/', 'http://localhost')

  if (url.pathname === '/api/send-email') {
    if (req.method === 'OPTIONS') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({}))
      return
    }

    if (req.method !== 'POST') {
      sendJson(res, 405, { error: 'Method not allowed' })
      return
    }

    try {
      const body = await readBody(req)
      const { to, name } = body || {}

      if (!to || !name) {
        sendJson(res, 400, { error: 'Missing required fields: to, name' })
        return
      }

      if (!process.env.SENDGRID_API_KEY) {
        sendJson(res, 500, { error: 'Missing SENDGRID_API_KEY configuration' })
        return
      }

      await sendEmail(body)
      sendJson(res, 200, { success: true, message: 'Email sent' })
    } catch (error) {
      console.error('SendGrid error:', error)
      sendJson(res, 500, { error: 'Failed to send email' })
    }

    return
  }

  if (!isProduction && vite) {
    vite.middlewares(req, res, () => {})
    return
  }

  const filePath = url.pathname === '/' ? '/index.html' : url.pathname
  const resolvedPath = path.join(distPath, filePath)

  try {
    const file = await readFile(resolvedPath)
    res.writeHead(200, { 'Content-Type': getContentType(resolvedPath) })
    res.end(file)
  } catch (error) {
    try {
      const fallback = await readFile(path.join(distPath, 'index.html'))
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(fallback)
    } catch (fallbackError) {
      console.error('Failed to serve static file:', fallbackError)
      res.writeHead(404)
      res.end('Not found')
    }
  }
}

const startServer = async () => {
  const vite = isProduction
    ? null
    : await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
      })

  const server = http.createServer(requestHandler(vite))

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
}

startServer()
