import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import TopPageContent from './TopPageContent'
import { MainLayoutDecorator } from '@/.storybook/decorators/mainLayoutDecorator'
import { http, HttpResponse } from 'msw'
import { API_BASE_URL } from '@/utils/apiClient'
import { API_ENDPOINTS } from '@/utils/constants/apiEndpoints'

const meta = {
  component: TopPageContent,
  decorators: [MainLayoutDecorator],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [
        http.get(`${API_BASE_URL.CLIENT}${API_ENDPOINTS.PHOTOS}?only_show_on_tp=true`, () => {
          return HttpResponse.json({
            data: [
              { id: 1, imageUrl: '/img_dev/photo1.jpg' },
              { id: 2, imageUrl: '/img_dev/photo2.jpg' },
              { id: 3, imageUrl: '/img_dev/photo3.jpg' },
            ],
          })
        }),
      ],
    },
  },
} satisfies Meta<typeof TopPageContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
