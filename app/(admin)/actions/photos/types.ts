export type PhotoActionState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
} | null
