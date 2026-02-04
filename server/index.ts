import 'dotenv/config'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'
import http from 'node:http'
import type { IncomingMessage, ServerResponse } from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'
import crypto from 'node:crypto'
import {
  createLogger,
  sendQuizResultsEmail,
  toSafeEmail
} from '../shared/mailgun'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT) || 5173

const distPath = path.resolve(__dirname, '../dist')

const mimeTypes: Record<string, string> = {
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

const getContentType = (filePath: string) =>
  mimeTypes[path.extname(filePath)] || 'application/octet-stream'

const sendJson = (
  res: ServerResponse,
  statusCode: number,
  payload: unknown
) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(payload))
}

const log = createLogger('server')

const readBody = async (req: IncomingMessage) => {
  const chunks: Buffer[] = []
  for await (const chunk of req) {
    chunks.push(chunk)
  }

  if (chunks.length === 0) {
    return null
  }

  const data = Buffer.concat(chunks).toString('utf-8')
  return JSON.parse(data) as unknown
}

type EmailRequest = {
  to: string
  name: string
  score: number
  total: number
  passed: boolean
  detailed?: boolean
  questions?: Array<{
    question: string
    options: string[]
    correctAnswer: number
  }>
  answers?: Record<number, number>
}

const sendEmail = async (payload: EmailRequest & { requestId: string }) => {
  const startedAt = Date.now()
  const data = await sendQuizResultsEmail({
    ...payload,
    log
  })
  log('info', 'mailgun_send_timing', {
    requestId: payload.requestId,
    durationMs: Date.now() - startedAt,
    messageId: data?.id
  })
}

const requestHandler =
  (vite: ViteDevServer | null) =>
  async (req: IncomingMessage, res: ServerResponse) => {
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

    const requestId = crypto.randomUUID()

    try {
      const body = (await readBody(req)) as Partial<EmailRequest> | null
      const { to, name } = body || {}

      if (!to || !name) {
        log('warn', 'email_send_validation_failed', {
          requestId,
          reason: 'Missing required fields: to, name'
        })
        sendJson(res, 400, { error: 'Missing required fields: to, name' })
        return
      }

      if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
        log('error', 'email_send_config_missing', {
          requestId,
          missing: {
            MAILGUN_API_KEY: !process.env.MAILGUN_API_KEY,
            MAILGUN_DOMAIN: !process.env.MAILGUN_DOMAIN
          }
        })
        sendJson(res, 500, { error: 'Missing Mailgun configuration' })
        return
      }

      log('info', 'email_send_requested', {
        requestId,
        to: toSafeEmail(to),
        detailed: Boolean(body?.detailed),
        hasQuestions: Array.isArray(body?.questions),
        score: body?.score,
        total: body?.total,
        passed: body?.passed
      })

      await sendEmail({ ...(body as EmailRequest), requestId })
      sendJson(res, 200, { success: true, message: 'Email sent' })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      log('error', 'email_send_failed', {
        requestId,
        error: errorMessage,
        status:
          error && typeof error === 'object' && 'status' in error
            ? error.status
            : undefined,
        details:
          error && typeof error === 'object'
            ? error.details || error.response?.body
            : undefined
      })
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
        server: { middlewareMode: true }
      })

  const server = http.createServer(requestHandler(vite))

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
}

startServer()
