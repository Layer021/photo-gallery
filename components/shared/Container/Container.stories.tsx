import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Container from './Container'

const meta = {
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}