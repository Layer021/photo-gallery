'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { sendContact } from '@/app/(main)/actions/contact'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type='submit'
      disabled={pending}
      className='w-full rounded bg-black py-2 text-sm text-white hover:bg-gray-800 disabled:opacity-50'
    >
      {pending ? '送信中...' : '送信する'}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContact, null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} className='mx-auto max-w-lg space-y-6' style={{ fontFamily: 'system-ui, sans-serif' }}>
      {state && !state.success && (
        <div className='rounded bg-red-50 p-3 text-sm text-red-600'>{state.message}</div>
      )}

      {state?.success && (
        <div className='rounded bg-green-50 p-3 text-sm text-green-600'>{state.message}</div>
      )}

      <div>
        <label htmlFor='name' className='block text-sm font-medium mb-1'>
          お名前 <span className='text-red-500'>*</span>
        </label>
        <input
          id='name'
          name='name'
          type='text'
          required
          className='w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none'
        />
        {state?.errors?.name && (
          <p className='mt-1 text-xs text-red-500'>{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor='organization' className='block text-sm font-medium mb-1'>
          企業・団体名
        </label>
        <input
          id='organization'
          name='organization'
          type='text'
          className='w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none'
        />
      </div>

      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          メールアドレス <span className='text-red-500'>*</span>
        </label>
        <input
          id='email'
          name='email'
          type='email'
          required
          className='w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none'
        />
        {state?.errors?.email && (
          <p className='mt-1 text-xs text-red-500'>{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor='message' className='block text-sm font-medium mb-1'>
          お問い合わせ内容 <span className='text-red-500'>*</span>
        </label>
        <textarea
          id='message'
          name='message'
          rows={6}
          required
          className='w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none resize-vertical'
        />
        {state?.errors?.message && (
          <p className='mt-1 text-xs text-red-500'>{state.errors.message[0]}</p>
        )}
      </div>

      <SubmitButton />
    </form>
  )
}
