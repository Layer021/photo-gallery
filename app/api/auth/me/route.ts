import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { serverApiClient } from '@/utils/apiClient'
import { ADMIN_API_ENDPOINTS } from '@/utils/constants/apiEndpoints'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value

  if (!token) {
    return NextResponse.json(
      { success: false, message: '未認証' },
      { status: 401 }
    )
  }

  try {
    const res = await serverApiClient.get(ADMIN_API_ENDPOINTS.ME, {
      headers: { Authorization: `Bearer ${token}` },
    })

    return NextResponse.json({ success: true, user: res.data })
  } catch {
    return NextResponse.json(
      { success: false, message: '認証に失敗しました' },
      { status: 401 }
    )
  }
}
