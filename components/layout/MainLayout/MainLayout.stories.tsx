import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import MainLayout from './MainLayout'

const meta = {
  component: MainLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MainLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
