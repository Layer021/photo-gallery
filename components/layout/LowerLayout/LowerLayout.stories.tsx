import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import LowerLayout from './LowerLayout'
import { MainLayoutDecorator } from '../../../.storybook/decorators/mainLayoutDecorator'

const meta = {
  component: LowerLayout,
  decorators: [MainLayoutDecorator],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LowerLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div className='bg-gray-100 text-center py-[200px]'>Lower page content</div>,
  },
}
