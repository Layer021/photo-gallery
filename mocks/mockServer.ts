import http from 'node:http'

const mockPhotos = [
  { id: 1, imageUrl: '/img_dev/photo1.jpg' },
  { id: 2, imageUrl: '/img_dev/photo2.jpg' },
  { id: 3, imageUrl: '/img_dev/photo3.jpg' },
]

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.url?.match(/\/photo\/portfolio_photos\/\d+/)) {
    res.end(JSON.stringify({ data: mockPhotos[0] }))
  } else if (req.url?.includes('/photo/portfolio_photos')) {
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
