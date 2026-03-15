'use client'

import { useRouter } from 'next/navigation'
import { ROUTES } from '@/utils/constants/routes'

export default function AdminHeader() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push(ROUTES.LOGIN)
  }

  return (
    <header className='flex items-center justify-between border-b border-gray-200 px-6 py-4'>
      <h1 className='text-lg font-bold'>管理画面</h1>
      <button
        type='button'
        onClick={handleLogout}
        className='text-sm text-gray-600 hover:text-black'
      >
        ログアウト
      </button>
    </header>
  )
}
