import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GalleryModal from './GalleryModal'
import { useState } from 'react'

const meta = {
  component: GalleryModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof GalleryModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [open, setOpen] = useState(args.isOpen)

    return (
      <div className='min-h-[500px] flex items-center justify-center'>
        <button onClick={() => setOpen(true)}>モーダルを表示</button>
        <GalleryModal isOpen={open} photo={args.photo} onClose={() => setOpen(false)} />
      </div>
    )
  },
  args: {
    isOpen: false,
    photo: {
      id: 1,
      imageUrl: '/img_dev/photo1.jpg',
    },
    onClose: () => {},
  },
}
