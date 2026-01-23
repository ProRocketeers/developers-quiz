import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

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

export async function POST(request: Request) {

  console.log('API KEY:', process.env.SENDGRID_API_KEY?.substring(0, 10))

  try {
    const body: EmailRequest = await request.json()
    const { to, name, score, total, passed, detailed = false, questions, answers } = body

    if (!to || !name) {
      return NextResponse.json(
        { error: 'Missing required fields: to, name' },
        { status: 400 }
      )
    }

    const percentage = Math.round((score / total) * 100)

    let questionsText = ''
    if (questions && answers) {
      if (detailed) {
        questionsText = questions
          .map((q, i) => {
            const userAnswerIndex = answers[i]
            const isCorrect = userAnswerIndex === q.correctAnswer
            const optionsText = q.options
              .map((opt, optIndex) => {
                const isUserAnswer = optIndex === userAnswerIndex
                const icon = isUserAnswer ? (isCorrect ? ' ✅' : ' ❌') : ''
                return `   - ${opt}${icon}`
              })
              .join('\n')
            return `${i + 1}. ${q.question}\n${optionsText}`
          })
          .join('\n\n')
      } else {
        questionsText = questions
          .map((q, i) => {
            const userAnswerIndex = answers[i]
            const isCorrect = userAnswerIndex === q.correctAnswer
            return `${i + 1}. ${q.question} ${isCorrect ? '✅' : '❌'}`
          })
          .join('\n')
      }
    }

    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com',
      subject: `TEST | Výsledky | Java Developer Quiz | ${name} - ${passed ? 'PROŠEL' : 'NEPROŠEL'} (${percentage}%)`,
      text: `
Ahoj ${name},

TEST | Výsledky | Java Developer Quiz | ${name} - ${score}/${total} (${percentage}%)
Status: ${passed ? 'PROŠEL ✅' : 'NEPROŠEL ❌'}

${questionsText ? `Přehled odpovědí:\n\n${questionsText}` : ''}

Děkujeme za účast!
Prorocketeers
      `.trim(),
    }

    await sgMail.send(msg)

    return NextResponse.json({ success: true, message: 'Email sent' })
  } catch (error) {
    console.error('SendGrid error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
