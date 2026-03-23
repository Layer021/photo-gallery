import http from 'node:http'

const mockPhotos = [
  { id: 1, imageUrl: '/img_dev/photo1.jpg' },
  { id: 2, imageUrl: '/img_dev/photo2.jpg' },
  { id: 3, imageUrl: '/img_dev/photo3.jpg' },
]

const mockAdminPhotos = [
  {
    id: 1,
    imageUrl: '/img_dev/photo1.jpg',
    showOnTop: true,
    enabled: true,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    id: 2,
    imageUrl: '/img_dev/photo2.jpg',
    showOnTop: false,
    enabled: true,
    createdAt: '2025-01-02',
    updatedAt: '2025-01-02',
  },
  {
    id: 3,
    imageUrl: '/img_dev/photo3.jpg',
    showOnTop: false,
    enabled: false,
    createdAt: '2025-01-03',
    updatedAt: '2025-01-03',
  },
]

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')

  const url = req.url ?? ''

  // Admin: GET /photo/admin/portfolio_photos/:id
  if (url.match(/\/photo\/admin\/portfolio_photos\/\d+/)) {
    const id = Number(url.match(/\/(\d+)/)?.[1])
    const photo = mockAdminPhotos.find(p => p.id === id) ?? mockAdminPhotos[0]
    res.end(JSON.stringify({ data: photo }))
  }
  // Admin: GET /photo/admin/portfolio_photos
  else if (url.includes('/photo/admin/portfolio_photos')) {
    res.end(
      JSON.stringify({
        data: mockAdminPhotos,
        links: { first: null, last: null, prev: null, next: null },
        meta: { current_page: 1, from: 1, last_page: 1, per_page: 15, to: 3, total: 3 },
      })
    )
  }
  // Admin: GET /photo/me
  else if (url.includes('/photo/me')) {
    res.end(JSON.stringify({ data: { id: 1, name: 'Test User', email: 'test@example.com' } }))
  }
  // Public: GET /photo/portfolio_photos/:id
  else if (url.match(/\/photo\/portfolio_photos\/\d+/)) {
    res.end(JSON.stringify({ data: mockPhotos[0] }))
  }
  // Public: GET /photo/portfolio_photos
  else if (url.includes('/photo/portfolio_photos')) {
    res.end(JSON.stringify({ data: mockPhotos }))
  } else {
    res.statusCode = 404
    res.end(JSON.stringify({ error: 'Not Found' }))
  }
})

const PORT = 40000
server.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`)
})
