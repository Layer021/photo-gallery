'use client'

import { useActionState, useState } from 'react'
import Link from 'next/link'
import { createPhoto, updatePhoto, type PhotoActionState } from '@/app/(admin)/actions/photos'
import { ROUTES } from '@/utils/constants/routes'
import type { AdminPhoto } from '@/utils/types/response'

type PhotoFormProps = { mode: 'create' } | { mode: 'edit'; photo: AdminPhoto }

export default function PhotoForm(props: PhotoFormProps) {
  const [preview, setPreview] = useState<string | null>(
    props.mode === 'edit' ? props.photo.imageUrl : null
  )

  const action =
    props.mode === 'create' ? createPhoto : updatePhoto.bind(null, String(props.photo.id))

  const [state, formAction, isPending] = useActionState<PhotoActionState, FormData>(action, null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
    }
  }

  return (
    <form action={formAction} className='space-y-6'>
      {state && !state.success && (
        <div className='rounded bg-red-50 p-3 text-sm text-red-600'>{state.message}</div>
      )}

      <div>
        <label htmlFor='image' className='block text-sm font-medium mb-1'>
          画像 {props.mode === 'create' && <span className='text-red-500'>*</span>}
        </label>
        {preview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt='プレビュー' className='mb-2 h-40 w-auto rounded object-cover' />
        )}
        <input
          id='image'
          name='image'
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          className='w-full text-sm'
        />
        {state?.errors?.image && (
          <p className='mt-1 text-sm text-red-600'>{state.errors.image[0]}</p>
        )}
      </div>

      <div className='flex items-center gap-2'>
        <input
          id='show_on_top'
          name='show_on_top'
          type='checkbox'
          value='1'
          defaultChecked={props.mode === 'edit' ? props.photo.showOnTop : false}
          className='h-4 w-4'
        />
        <label htmlFor='show_on_top' className='text-sm'>
          トップページに表示
        </label>
      </div>

      <div className='flex items-center gap-2'>
        <input
          id='enabled'
          name='enabled'
          type='checkbox'
          value='1'
          defaultChecked={props.mode === 'edit' ? props.photo.enabled : true}
          className='h-4 w-4'
        />
        <label htmlFor='enabled' className='text-sm'>
          有効
        </label>
      </div>

      <div className='flex gap-3'>
        <button
          type='submit'
          disabled={isPending}
          className='rounded bg-black px-6 py-2 text-sm text-white hover:bg-gray-800 disabled:opacity-50'
        >
          {isPending ? '保存中...' : props.mode === 'create' ? '登録' : '更新'}
        </button>
        <Link
          href={ROUTES.ADMIN}
          className='rounded border border-gray-300 px-6 py-2 text-sm hover:bg-gray-50'
        >
          キャンセル
        </Link>
      </div>
    </form>
  )
}
