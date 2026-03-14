import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { serverApiClient } from '@/utils/apiClient'
import { ADMIN_API_ENDPOINTS } from '@/utils/constants/apiEndpoints'
import type { LoginRequest } from '@/utils/types/auth'

export async function POST(request: Request) {
  const body: LoginRequest = await request.json()

  try {
    const res = await serverApiClient.post(ADMIN_API_ENDPOINTS.LOGIN, body)
    const { token, user } = res.data

    const cookieStore = await cookies()
    cookieStore.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    })

    return NextResponse.json({ success: true, user })
  } catch (error: unknown) {
    const status =
      error instanceof Error && 'response' in error
        ? (error as { response: { status: number } }).response.status
        : 500
    return NextResponse.json(
      { success: false, message: 'ログインに失敗しました' },
      { status }
    )
  }
}
