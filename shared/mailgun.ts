import FormData from 'form-data'
import Mailgun from 'mailgun.js'

type LogLevel = 'info' | 'warn' | 'error'
type Logger = (level: LogLevel, message: string, meta?: Record<string, unknown>) => void

type Question = {
  question: string
  options: string[]
  correctAnswer: number
  category?: string
}

type QuizEmailInput = {
  name: string
  score: number
  total: number
  passed: boolean
  detailed?: boolean
  questions?: Question[]
  answers?: Record<number, number>
}

type MailgunEnv = {
  MAILGUN_API_KEY?: string
  MAILGUN_DOMAIN?: string
  MAILGUN_URL?: string
  MAILGUN_FROM_EMAIL?: string
}

type MailgunConfig = {
  apiKey?: string
  domain?: string
  url?: string
  fromEmail?: string | null
}

type MailgunMessageResponse = {
  id?: string
  message?: string
}

export const createLogger = (source: string): Logger => {
  return (level, message, meta = {}) => {
    const payload = {
      level,
      message,
      source,
      time: new Date().toISOString(),
      ...meta
    }

    const line = JSON.stringify(payload)
    if (level === 'error') {
      console.error(line)
    } else if (level === 'warn') {
      console.warn(line)
    } else {
      console.log(line)
    }
  }
}

export const toSafeEmail = (email?: string) => {
  if (typeof email !== 'string') {
    return null
  }

  const [, domain] = email.split('@')
  return domain ? `***@${domain}` : null
}

const buildQuestionsText = (
  questions?: Question[],
  answers?: Record<number, number>,
  detailed?: boolean
) => {
  if (!Array.isArray(questions) || !answers) {
    return ''
  }

  if (detailed) {
    return questions
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
  }

  return questions
    .map((question, index) => {
      const userAnswerIndex = answers[index]
      const isCorrect = userAnswerIndex === question.correctAnswer
      return `${index + 1}. ${question.question} ${isCorrect ? '✅' : '❌'}`
    })
    .join('\n')
}

export const buildQuizEmail = ({
  name,
  score,
  total,
  passed,
  detailed = false,
  questions,
  answers
}: QuizEmailInput) => {
  const percentage = Math.round((Number(score) / Number(total)) * 100)
  const questionsText = buildQuestionsText(questions, answers, detailed)
  const subject = `TEST | Výsledky | Java Developer Quiz | ${name} - ${
    passed ? 'PROŠEL' : 'NEPROŠEL'
  } (${percentage}%)`
  const text = `
Ahoj ${name},

TEST | Výsledky | Java Developer Quiz | ${name} - ${score}/${total} (${percentage}%)
Status: ${passed ? 'PROŠEL ✅' : 'NEPROŠEL ❌'}

${questionsText ? `Přehled odpovědí:\n\n${questionsText}` : ''}

Děkujeme za účast!
Prorocketeers
  `.trim()

  return { subject, text }
}

const getMailgunConfig = (env: MailgunEnv): MailgunConfig => {
  const apiKey = env.MAILGUN_API_KEY
  const domain = env.MAILGUN_DOMAIN
  const url = env.MAILGUN_URL
  const fromEmail = env.MAILGUN_FROM_EMAIL || (domain ? `postmaster@${domain}` : null)

  return { apiKey, domain, url, fromEmail }
}

const createMailgunClient = ({ apiKey, url }: MailgunConfig) => {
  const mailgun = new Mailgun(FormData)
  const options: { username: string; key?: string; url?: string } = {
    username: 'api',
    key: apiKey
  }

  if (url) {
    options.url = url
  }

  return mailgun.client(options)
}

export const sendQuizResultsEmail = async ({
  to,
  name,
  score,
  total,
  passed,
  detailed = false,
  questions,
  answers,
  requestId,
  log,
  env = process.env
}: QuizEmailInput & {
  to: string
  requestId?: string
  log?: Logger
  env?: MailgunEnv
}) => {
  const config = getMailgunConfig(env)
  if (!config.apiKey || !config.domain || !config.fromEmail) {
    throw new Error('Missing Mailgun configuration')
  }

  const { subject, text } = buildQuizEmail({
    name,
    score,
    total,
    passed,
    detailed,
    questions,
    answers
  })

  const client = createMailgunClient(config)
  const data = (await client.messages.create(config.domain, {
    to: [to],
    from: config.fromEmail,
    subject,
    text
  })) as MailgunMessageResponse

  if (log) {
    log('info', 'mailgun_send_success', {
      requestId,
      messageId: data?.id,
      message: data?.message
    })
  }

  return data
}
