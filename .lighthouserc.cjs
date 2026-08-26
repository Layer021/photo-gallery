module.exports = {
  ci: {
    collect: {
      startServerCommand: 'BYPASS_AUTH=true npm run start',
      startServerReadyPattern: 'Ready in',
      startServerReadyTimeout: 30000,
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/gallery',
        'http://localhost:3000/contact',
        'http://localhost:3000/profile',
        'http://localhost:3000/admin',
        'http://localhost:3000/admin/login',
        'http://localhost:3000/admin/photos/new',
        'http://localhost:3000/admin/photos/1/edit',
      ],
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
        skipAudits: ['uses-http2'],
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.6 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
