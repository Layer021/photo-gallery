import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import TopPageContent from './TopPageContent'

const meta = {
  component: TopPageContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TopPageContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}