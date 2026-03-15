export interface ApiResponse<T> {
  data: T
}

export interface Photo {
  id: number
  imageUrl: string
}

export interface AdminPhoto {
  id: number
  imageUrl: string
  showOnTop: boolean
  enabled: boolean
  createdAt: string
  updatedAt: string
}

export interface PaginationMeta {
  current_page: number
  from: number | null
  last_page: number
  per_page: number
  to: number | null
  total: number
}

export interface PaginatedResponse<T> {
  data: T[]
  links: {
    first: string | null
    last: string | null
    prev: string | null
    next: string | null
  }
  meta: PaginationMeta
}
