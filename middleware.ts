import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ROUTES } from '@/utils/constants/routes'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('auth_token')?.value

  // ログインページ: 認証済みなら管理画面にリダイレクト
  if (pathname === ROUTES.LOGIN) {
    if (token) {
      return NextResponse.redirect(new URL(ROUTES.ADMIN, request.url))
    }
    return NextResponse.next()
  }

  // 管理画面: 未認証ならログインページにリダイレクト
  if (!token) {
    const loginUrl = new URL(ROUTES.LOGIN, request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/login', '/admin/:path*'],
}
