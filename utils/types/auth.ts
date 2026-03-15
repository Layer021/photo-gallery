export interface LoginRequest {
  email: string
  password: string
}

export interface AuthUser {
  id: number
  email: string
  name: string
}

export interface LoginResponse {
  success: boolean
  user: AuthUser
}
