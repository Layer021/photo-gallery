'use client'

import { useEffect, useState } from 'react'
import CloseIcon from '@/public/img/close.svg'
import clsx from 'clsx'

export interface GalleryModalProps {
  isOpen: boolean
  photo?: {
    id: number
    imageUrl: string
  } | null
  onClose: () => void
}

export default function GalleryModal({ isOpen, photo, onClose }: GalleryModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isOpen && photo) {
      setShouldRender(true)
      // 次のフレームでアニメーションを開始
      requestAnimationFrame(() => {
        setIsVisible(true)
      })
    } else {
      setIsVisible(false)
      // アニメーション完了後にコンポーネントを非表示
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 300) // アニメーション時間と一致させる
      return () => clearTimeout(timer)
    }
  }, [isOpen, photo])

  const handleClose = () => {
    setIsVisible(false)
    // アニメーション完了後にonCloseを呼び出し
    setTimeout(() => {
      onClose()
    }, 300)
  }

  if (!shouldRender || !photo) return null

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-90 z-80`}>
      {/* Modal content */}
      <div
        className={clsx(
          'grow-0 bg-white shadow-lg overflow-hidden max-w-[90vw] max-h-[90vh] p-5 transition-all duration-300 ease-in-out transform',
          {
            'scale-100 opacity-100': isVisible,
            'scale-95 opacity-0': !isVisible,
          }
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.imageUrl}
          alt={`Photo ${photo.id}`}
          className='max-w-full max-h-[85vh] object-contain'
        />
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className={clsx(
          'absolute top-2 right-2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-all ease-in-out cursor-pointer',
          {
            'opacity-100': isVisible,
            'opacity-0': !isVisible,
          }
        )}
        aria-label='閉じる'
      >
        <CloseIcon width={15} height={15} className='fill-current' />
      </button>

      {/* Backdrop */}
      <div
        className={clsx(
          'absolute inset-0 bg-black/50 backdrop-blur-sm z-[-1] transition-opacity duration-300 ease-in-out',
          {
            'opacity-100': isVisible,
            'opacity-0': !isVisible,
          }
        )}
        onClick={handleClose}
      />
    </div>
  )
}
