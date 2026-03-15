export { getAuthHeaders, extractAxiosError } from '../helpers'

export function normalizeCheckboxFields(formData: FormData): FormData {
  const normalized = new FormData()

  const image = formData.get('image') as File | null
  if (image && image.size > 0) {
    normalized.append('image', image)
  }

  normalized.append('show_on_top', formData.has('show_on_top') ? '1' : '0')
  normalized.append('enabled', formData.has('enabled') ? '1' : '0')

  return normalized
}
