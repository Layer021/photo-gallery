import { http, HttpResponse } from 'msw'

const mockPhotos = [
  { id: 1, imageUrl: '/img_dev/photo1.jpg' },
  { id: 2, imageUrl: '/img_dev/photo2.jpg' },
  { id: 3, imageUrl: '/img_dev/photo3.jpg' },
]

export const handlers = [
  http.get('*/portfolio_photos', () => {
    return HttpResponse.json({ data: mockPhotos })
  }),
  http.get('*/portfolio_photos/:id', ({ params }) => {
    const photo = mockPhotos.find((p) => p.id === Number(params.id))
    return HttpResponse.json({ data: photo ?? mockPhotos[0] })
  }),
]
