import { cookies } from 'next/headers'
import type { PhotoActionState } from './types'

export async function getAuthHeaders() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value
  if (!token) throw new Error('未認証')
  return { Authorization: `Bearer ${token}` }
}

export function normalizeCheckboxFields(formData: FormData): FormData {
  const normalized = new FormData()

  const image = formData.get('image') as File | null
  if (image && image.size > 0) {
    normalized.append('image', image)
  }

  normalized.append('show_on_top', formData.has('show_on_top') ? '1' : '0')
  normalized.append('enabled', formData.has('enabled') ? '1' : '0')

  return normalized
}

export function extractAxiosError(error: unknown): PhotoActionState {
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
