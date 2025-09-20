export const ROUTES = {
  ROOT: '/',
  PROFILE: '/profile',
  GALLERY: '/gallery',
  GALLERY_DETAIL: (id: string | number) => `/gallery?photo=${id}`,
  CONTACT: '/contact',
} as const
