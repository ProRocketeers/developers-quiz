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
  questions?: Question[]
  answers?: Record<number, number>
}

export async function POST(request: Request) {

  console.log('API KEY:', process.env.SENDGRID_API_KEY?.substring(0, 10))

  try {
    const body: EmailRequest = await request.json()
    const { to, name, score, total, questions, answers } = body

    if (!to || !name) {
      return NextResponse.json(
        { error: 'Missing required fields: to, name' },
        { status: 400 }
      )
    }

    const percentage = Math.round((score / total) * 100)
    const passed = percentage >= 50

    let questionsText = ''
    if (questions && answers) {
      questionsText = questions
        .map((q, i) => {
          const userAnswerIndex = answers[i]
          const isCorrect = userAnswerIndex === q.correctAnswer
          const userAnswer = q.options[userAnswerIndex] || 'Nezodpovězeno'
          return `${i + 1}. ${q.question}\n   ${isCorrect ? '✅' : '❌'} ${userAnswer}`
        })
        .join('\n\n')
    }

    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com',
      subject: `Výsledky kvízu - ${passed ? 'PROŠEL' : 'NEPROŠEL'} (${percentage}%)`,
      text: `
Ahoj ${name},

Výsledek kvízu: ${score}/${total} (${percentage}%)
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
