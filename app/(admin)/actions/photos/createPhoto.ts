'use server'

import { redirect } from 'next/navigation'
import { serverApiClient } from '@/utils/apiClient'
import { ADMIN_API_ENDPOINTS } from '@/utils/constants/apiEndpoints'
import { ROUTES } from '@/utils/constants/routes'
import type { PhotoActionState } from './types'
import { getAuthHeaders, normalizeCheckboxFields, extractAxiosError } from './helpers'

export async function createPhoto(
  _prevState: PhotoActionState,
  formData: FormData
): Promise<PhotoActionState> {
  const headers = await getAuthHeaders()
  const body = normalizeCheckboxFields(formData)

  try {
    await serverApiClient.post(ADMIN_API_ENDPOINTS.PHOTOS, body, {
      headers,
    })
  } catch (error: unknown) {
    return (
      extractAxiosError(error) ?? {
        success: false,
        message: '写真の登録に失敗しました',
      }
    )
  }

  redirect(ROUTES.ADMIN)
}
