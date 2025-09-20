import { ROUTES } from '@/utils/constants/routes'
import { useRouter, useSearchParams } from 'next/navigation'

const ITEMS = [
  { id: 1, imageUrl: '/img_dev/photo1.jpg' },
  { id: 2, imageUrl: '/img_dev/photo2.jpg' },
  { id: 3, imageUrl: '/img_dev/photo3.jpg' },
  { id: 4, imageUrl: '/img_dev/photo4.jpg' },
  { id: 5, imageUrl: '/img_dev/photo5.jpg' },
  { id: 6, imageUrl: '/img_dev/photo6.jpg' },
  { id: 7, imageUrl: '/img_dev/photo7.jpg' },
]

// TODO: APIリクエストに変更
const fetchPhoto = (id: string) => {
  return ITEMS.find(item => item.id === parseInt(id, 10))
}

export const useGalleryModal = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const photoId = searchParams.get('photo')
  const photo = photoId ? fetchPhoto(photoId) : null

  console.log(searchParams)

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
