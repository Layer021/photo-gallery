'use server'

import { redirect } from 'next/navigation'
import { serverApiClient } from '@/utils/apiClient'
import { ADMIN_API_ENDPOINTS } from '@/utils/constants/apiEndpoints'
import { ROUTES } from '@/utils/constants/routes'
import type { PhotoActionState } from './types'
import { getAuthHeaders } from './helpers'

export async function deletePhoto(
  _prevState: PhotoActionState,
  formData: FormData
): Promise<PhotoActionState> {
  const id = formData.get('id') as string
  const headers = await getAuthHeaders()

  try {
    await serverApiClient.delete(ADMIN_API_ENDPOINTS.PHOTO_DETAIL(id), {
      headers,
    })
  } catch {
    return { success: false, message: '写真の削除に失敗しました' }
  }

  redirect(ROUTES.ADMIN)
}
