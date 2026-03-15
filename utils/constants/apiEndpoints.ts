export const API_ENDPOINTS = {
  PHOTOS: '/portfolio_photos',
  PHOTO_DETAIL: (id: string | number) => `/portfolio_photos/${id}`,
}

export const ADMIN_API_ENDPOINTS = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  ME: '/me',
  PHOTOS: '/admin/portfolio_photos',
  PHOTO_DETAIL: (id: string | number) => `/admin/portfolio_photos/${id}`,
}
