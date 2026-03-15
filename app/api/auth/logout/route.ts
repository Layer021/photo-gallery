import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { serverApiClient } from '@/utils/apiClient'
import { ADMIN_API_ENDPOINTS } from '@/utils/constants/apiEndpoints'

export async function POST() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value

  try {
    if (token) {
      await serverApiClient.post(ADMIN_API_ENDPOINTS.LOGOUT, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
    }
  } catch {
    // Laravel側のログアウト失敗は無視してCookieは削除する
  }

  cookieStore.delete('auth_token')
  return NextResponse.json({ success: true })
}
