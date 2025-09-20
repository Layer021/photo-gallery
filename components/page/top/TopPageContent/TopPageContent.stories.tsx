import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import TopPageContent from './TopPageContent'
import { MainLayoutDecorator } from '@/.storybook/decorators/mainLayoutDecorator'

const meta = {
  component: TopPageContent,
  decorators: [MainLayoutDecorator],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TopPageContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
