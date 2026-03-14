'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useZodForm } from '@/hooks/useZodForm'
import { ROUTES } from '@/utils/constants/routes'

const loginSchema = z.object({
  email: z
    .email({ error: '有効なメールアドレスを入力してください' })
    .min(1, 'メールアドレスを入力してください'),
  password: z.string().min(1, 'パスワードを入力してください'),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginForm() {
  const router = useRouter()
  const [serverError, setServerError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm(loginSchema)

  const onSubmit = async (data: LoginFormValues) => {
    setServerError('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const errorData = await res.json()
        setServerError(errorData.message || 'ログインに失敗しました')
        return
      }

      router.push(ROUTES.ADMIN)
    } catch {
      setServerError('通信エラーが発生しました')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      {serverError && (
        <div className='rounded bg-red-50 p-3 text-sm text-red-600'>
          {serverError}
        </div>
      )}

      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          メールアドレス
        </label>
        <input
          id='email'
          type='email'
          autoComplete='email'
          {...register('email')}
          className='w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none'
        />
        {errors.email && (
          <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='password' className='block text-sm font-medium mb-1'>
          パスワード
        </label>
        <input
          id='password'
          type='password'
          autoComplete='current-password'
          {...register('password')}
          className='w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none'
        />
        {errors.password && (
          <p className='mt-1 text-sm text-red-600'>
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full rounded bg-black py-2 text-sm text-white hover:bg-gray-800 disabled:opacity-50'
      >
        {isSubmitting ? 'ログイン中...' : 'ログイン'}
      </button>
    </form>
  )
}
