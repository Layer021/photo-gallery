'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { login } from '@/app/(admin)/actions/auth'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type='submit'
      disabled={pending}
      className='w-full rounded bg-black py-2 text-sm text-white hover:bg-gray-800 disabled:opacity-50'
    >
      {pending ? 'ログイン中...' : 'ログイン'}
    </button>
  )
}

export default function LoginForm() {
  const [state, formAction] = useActionState(login, null)

  return (
    <form action={formAction} className='space-y-6'>
      {state && !state.success && (
        <div className='rounded bg-red-50 p-3 text-sm text-red-600'>{state.message}</div>
      )}

      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          メールアドレス
        </label>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          required
          className='w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none'
        />
      </div>

      <div>
        <label htmlFor='password' className='block text-sm font-medium mb-1'>
          パスワード
        </label>
        <input
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          required
          className='w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none'
        />
      </div>

      <SubmitButton />
    </form>
  )
}
