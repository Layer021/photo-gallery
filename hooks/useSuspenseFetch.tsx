import { clientApiClient } from '@/utils/apiClient'
import { ApiResponse } from '@/utils/types/response'
import useSWR from 'swr'

const fetcher = <T,>(url: string) =>
  clientApiClient.get<ApiResponse<T>>(url).then(res => res.data.data)

export function useSuspenseFetch<T>(url: string | null) {
  const { data, ...rest } = useSWR<T>(url, fetcher<T>, { suspense: true })
  return { data: data!, ...rest }
}
