import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import PageTitle from './PageTitle'

const meta = {
  component: PageTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PageTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'PAGE TITLE',
  },
}
