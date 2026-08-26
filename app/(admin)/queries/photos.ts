import { cookies } from 'next/headers'
import { serverApiClient } from '@/utils/apiClient'
import { ADMIN_API_ENDPOINTS } from '@/utils/constants/apiEndpoints'
import type { AdminPhoto, PaginatedResponse } from '@/utils/types/response'

async function getAuthHeaders() {
  if (process.env.BYPASS_AUTH === 'true') {
    return { Authorization: 'Bearer mock-token' }
  }
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value
  if (!token) throw new Error('未認証')
  return { Authorization: `Bearer ${token}` }
}

export async function getPhotos(page: number = 1): Promise<PaginatedResponse<AdminPhoto>> {
  const headers = await getAuthHeaders()
  const res = await serverApiClient.get(ADMIN_API_ENDPOINTS.PHOTOS, {
    headers,
    params: { page },
  })
  return res.data
}

export async function getPhoto(id: string): Promise<AdminPhoto> {
  const headers = await getAuthHeaders()
  const res = await serverApiClient.get(ADMIN_API_ENDPOINTS.PHOTO_DETAIL(id), { headers })
  return res.data.data
}
