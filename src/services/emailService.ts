import type { Question } from '../types'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

interface EmailData {
  to: string
  name: string
  score: number
  total: number
  passed: boolean
  detailed?: boolean
  questions?: Question[]
  answers?: Record<number, number>
}

type EmailResponse = {
  success: boolean
  message?: string
}

const parseResponseBody = (body: string) => {
  if (!body) {
    return null
  }
  try {
    return JSON.parse(body) as { message?: string; error?: string }
  } catch {
    return null
  }
}

export async function sendResultsEmail(
  data: EmailData
): Promise<EmailResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const responseBody = await response.text()
    const result = parseResponseBody(responseBody)

    if (response.ok) {
      console.log('Email sent:', result?.message ?? 'Email sent')
      return { success: true, message: result?.message }
    }

    if (response.status === 400) {
      console.error('Bad request:', result?.error ?? 'Bad request')
      return { success: false, message: result?.error ?? 'Bad request' }
    }

    console.error('Server error:', result?.error ?? 'Server error')
    return { success: false, message: result?.error ?? 'Server error' }
  } catch (error) {
    console.error('Failed to connect:', error)
    return { success: false, message: 'Failed to connect' }
  }
}
