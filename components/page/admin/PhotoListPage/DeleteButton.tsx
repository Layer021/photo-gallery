'use client'

import { useActionState } from 'react'
import { deletePhoto, type PhotoActionState } from '@/app/(admin)/actions/photos'

interface DeleteButtonProps {
  photoId: number
}

export default function DeleteButton({ photoId }: DeleteButtonProps) {
  const [state, formAction, isPending] = useActionState<
    PhotoActionState,
    FormData
  >(deletePhoto, null)

  return (
    <form
      action={formAction}
      onSubmit={(e) => {
        if (!window.confirm('この写真を削除しますか？')) {
          e.preventDefault()
        }
      }}
    >
      <input type='hidden' name='id' value={photoId} />
      <button
        type='submit'
        disabled={isPending}
        className='text-red-600 hover:text-red-800 disabled:opacity-50'
      >
        {isPending ? '削除中...' : '削除'}
      </button>
      {state && !state.success && (
        <p className='text-xs text-red-600 mt-1'>{state.message}</p>
      )}
    </form>
  )
}
