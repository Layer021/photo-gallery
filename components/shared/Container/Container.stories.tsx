import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Container from './Container'

const meta = {
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className='bg-gray-200 w-full h-20 flex items-center justify-center'>
        <span className='text-gray-700'>This is inside the Container</span>
      </div>
    ),
  },
}
