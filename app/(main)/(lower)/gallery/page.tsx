import SWRProvider from '@/app/swr-provider'
import GalleryPageContent from '@/components/page/gallery/GalleryPageContent'
import { serverApiClient } from '@/utils/apiClient'
import { API_ENDPOINTS } from '@/utils/constants/apiEndpoints'
import { ApiResponse, Photo } from '@/utils/types/response'

const fetchPhotos = async () => {
  try {
    const res = await serverApiClient.get<ApiResponse<Photo[]>>(API_ENDPOINTS.PHOTOS)
    return res.data.data
  } catch (e) {
    console.error(e)
    return []
  }
}

const fetchPhoto = async (id: string) => {
  try {
    const res = await serverApiClient.get<ApiResponse<Photo>>(API_ENDPOINTS.PHOTO_DETAIL(id))
    return res.data.data
  } catch (e) {
    console.error(e)
    return null
  }
}

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const photoParam = (await searchParams).photo
  const photoId = typeof photoParam === 'string' ? photoParam : null

  const photos = await fetchPhotos()
  const photo = photoId ? await fetchPhoto(photoId) : null

  return (
    <SWRProvider
      value={{
        fallback: {
          [API_ENDPOINTS.PHOTOS]: photos,
          ...(photoId && photo ? { [API_ENDPOINTS.PHOTO_DETAIL(photoId)]: photo } : {}),
        },
      }}
    >
      <GalleryPageContent />
    </SWRProvider>
  )
}
