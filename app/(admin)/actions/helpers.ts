import { cookies } from 'next/headers'
import type { ActionState } from './types'

export async function getAuthHeaders() {
  if (process.env.BYPASS_AUTH === 'true') {
    return { Authorization: 'Bearer mock-token' }
  }
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value
  if (!token) throw new Error('未認証')
  return { Authorization: `Bearer ${token}` }
}

export function extractAxiosError(error: unknown): ActionState {
  if (
    error instanceof Error &&
    'response' in error &&
    (error as { response: { status: number } }).response.status === 422
  ) {
    const responseData = (
      error as {
        response: { data: { message: string; errors: Record<string, string[]> } }
      }
    ).response.data
    return {
      success: false,
      message: responseData.message,
      errors: responseData.errors,
    }
  }
  return null
}
