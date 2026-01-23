import type { Question } from '../types'

const API_URL = 'http://localhost:3001'

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

export async function sendResultsEmail(data: EmailData): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/api/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    if (response.ok) {
      console.log('Email sent:', result.message)
      return true
    }

    if (response.status === 400) {
      console.error('Bad request:', result.error)
      return false
    }

    console.error('Server error:', result.error)
    return false
  } catch (error) {
    console.error('Failed to connect:', error)
    return false
  }
}
