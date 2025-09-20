import TopPageContent from '@/components/page/top/TopPageContent'
import SWRProvider from './swr-provider'
import { serverApiClient } from '@/utils/apiClient'
import { ApiResponse, Photo } from '@/utils/types/response'
import { API_ENDPOINTS } from '@/utils/constants/apiEndpoints'

const endpoint = `${API_ENDPOINTS.PHOTOS}?only_show_on_top=true`

const fetchPhotos = async () => {
  try {
    const res = await serverApiClient.get<ApiResponse<Photo[]>>(endpoint)
    return res.data.data
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function TopPage() {
  const photos = await fetchPhotos()

  return (
    <SWRProvider
      value={{
        fallback: { [endpoint]: photos },
      }}
    >
      <TopPageContent />
    </SWRProvider>
  )
}
