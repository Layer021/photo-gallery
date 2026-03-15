export const ROUTES = {
  ROOT: '/',
  PROFILE: '/profile',
  GALLERY: '/gallery',
  GALLERY_DETAIL: (id: string | number) => `/gallery?photo=${id}`,
  CONTACT: '/contact',
  LOGIN: '/admin/login',
  ADMIN: '/admin',
  ADMIN_PHOTOS_NEW: '/admin/photos/new',
  ADMIN_PHOTOS_EDIT: (id: string | number) => `/admin/photos/${id}/edit`,
} as const
