import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GalleryPageContent from './GalleryPageContent'
import { LowerLayoutDecorator } from '@/.storybook/decorators/lowerLayoutDecorator'
import { ROUTES } from '@/utils/constants/routes'

const meta = {
  component: GalleryPageContent,
  decorators: [LowerLayoutDecorator],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
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
