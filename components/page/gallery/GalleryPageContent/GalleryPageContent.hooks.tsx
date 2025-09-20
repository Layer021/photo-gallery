import { useSuspenseFetch } from '@/hooks/useSuspenseFetch'
import { API_ENDPOINTS } from '@/utils/constants/apiEndpoints'
import { ROUTES } from '@/utils/constants/routes'
import { Photo } from '@/utils/types/response'
import { useRouter, useSearchParams } from 'next/navigation'

export const useGalleryModal = () => {
  const router = useRouter()
  const photoParam = useSearchParams().get('photo')
  const photoId = typeof photoParam === 'string' ? photoParam : null
  const { data: photo } = useSuspenseFetch<Photo>(
    photoId ? API_ENDPOINTS.PHOTO_DETAIL(photoId) : null
  )

  // クエリパラメータを削除してモーダルを閉じる
  const handleClose = () => {
    router.replace(ROUTES.GALLERY)
  }

  return {
    isOpen: !!photo,
    photo,
    handleClose,
  }
}
