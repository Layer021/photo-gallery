'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { serverApiClient } from '@/utils/apiClient'
import { ADMIN_API_ENDPOINTS } from '@/utils/constants/apiEndpoints'
import { ROUTES } from '@/utils/constants/routes'
import type { ActionState } from '../types'
import { extractAxiosError } from '../helpers'

export async function login(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    const res = await serverApiClient.post(ADMIN_API_ENDPOINTS.LOGIN, {
      email,
      password,
    })
    const { token } = res.data

    const cookieStore = await cookies()
    cookieStore.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    })
  } catch (error: unknown) {
    return (
      extractAxiosError(error) ?? {
        success: false,
        message: 'ログインに失敗しました',
      }
    )
  }

  redirect(ROUTES.ADMIN)
}
