import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GalleryPageContent from './GalleryPageContent'
import { LowerLayoutDecorator } from '@/.storybook/decorators/lowerLayoutDecorator'
import { ROUTES } from '@/utils/constants/routes'
import { API_BASE_URL } from '@/utils/apiClient'
import { API_ENDPOINTS } from '@/utils/constants/apiEndpoints'
import { http, HttpResponse } from 'msw'

const meta = {
  component: GalleryPageContent,
  decorators: [LowerLayoutDecorator],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [
        http.get(`${API_BASE_URL.CLIENT}${API_ENDPOINTS.PHOTOS}`, () => {
          return HttpResponse.json({
            data: [
              { id: 1, imageUrl: '/img_dev/photo1.jpg' },
              { id: 2, imageUrl: '/img_dev/photo2.jpg' },
              { id: 3, imageUrl: '/img_dev/photo3.jpg' },
              { id: 4, imageUrl: '/img_dev/photo4.jpg' },
              { id: 5, imageUrl: '/img_dev/photo5.jpg' },
              { id: 6, imageUrl: '/img_dev/photo6.jpg' },
              { id: 6, imageUrl: '/img_dev/photo7.jpg' },
            ],
          })
        }),
        http.get(`${API_BASE_URL.CLIENT}${API_ENDPOINTS.PHOTO_DETAIL(1)}`, () => {
          return HttpResponse.json({
            data: { id: 1, imageUrl: '/img_dev/photo1.jpg' },
          })
        }),
      ],
    },
  },
} satisfies Meta<typeof GalleryPageContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const PhotoSelected: Story = {
  args: {},
  parameters: {
    nextjs: {
      navigation: {
        pathname: ROUTES.GALLERY,
        query: { photo: '1' },
        params: {},
        segments: ['gallery'],
      },
    },
  },
}
