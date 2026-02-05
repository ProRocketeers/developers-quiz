import { NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'
import {
  createLogger,
  sendQuizResultsEmail,
  toSafeEmail
} from '@shared/mailgun'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  category: string
}

interface EmailRequest {
  to: string
  name: string
  score: number
  total: number
  passed: boolean
  detailed?: boolean
  questions?: Question[]
  answers?: Record<number, number>
}

interface ErrorWithDetails {
  details?: unknown
  response?: {
    body?: unknown
  }
}

const log = createLogger('email-api')

export async function POST(request: Request) {
  const requestId = randomUUID()
  try {
    const body: EmailRequest = await request.json()
    const { to, name, score, total, passed, detailed = false, questions, answers } = body

    if (!to || !name) {
      log('warn', 'email_send_validation_failed', {
        requestId,
        reason: 'Missing required fields: to, name'
      })
      return NextResponse.json(
        { error: 'Missing required fields: to, name' },
        { status: 400 }
      )
    }

    log('info', 'email_send_requested', {
      requestId,
      to: toSafeEmail(to),
      detailed,
      hasQuestions: Boolean(questions?.length),
      score,
      total,
      passed
    })

    await sendQuizResultsEmail({
      to,
      name,
      score,
      total,
      passed,
      detailed,
      questions,
      answers,
      requestId,
      log
    })

    return NextResponse.json({ success: true, message: 'Email sent' })
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
          ? (error as ErrorWithDetails).details || (error as ErrorWithDetails).response?.body
          : undefined
    })
    return NextResponse.json(
      {
        error:
          errorMessage === 'Missing Mailgun configuration'
            ? errorMessage
            : 'Failed to send email'
      },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
