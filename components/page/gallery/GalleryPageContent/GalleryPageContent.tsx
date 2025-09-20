'use client'

import Container from '@/components/shared/Container'
import PageTitle from '@/components/shared/PageTitle'
import { ROUTES } from '@/utils/constants/routes'
import Link from 'next/link'
import { useGalleryModal } from './GalleryPageContent.hooks'
import GalleryModal from '../GalleryModal'

const ITEMS = [
  { id: 1, imageUrl: '/img_dev/photo1.jpg' },
  { id: 2, imageUrl: '/img_dev/photo2.jpg' },
  { id: 3, imageUrl: '/img_dev/photo3.jpg' },
  { id: 4, imageUrl: '/img_dev/photo4.jpg' },
  { id: 5, imageUrl: '/img_dev/photo5.jpg' },
  { id: 6, imageUrl: '/img_dev/photo6.jpg' },
  { id: 7, imageUrl: '/img_dev/photo7.jpg' },
]

export default function GalleryPageContent() {
  const { isOpen, photo, handleClose } = useGalleryModal()

  return (
    <>
      <PageTitle className='mb-14'>GALLERY</PageTitle>
      <Container>
        <ul className='grid grid-cols-3 gap-6'>
          {ITEMS.map(item => (
            <li key={item.id} className='overflow-hidden rounded-lg'>
              <Link href={ROUTES.GALLERY_DETAIL(item.id)} replace>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={`Photo ${item.id}`}
                  loading='lazy'
                  className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 cursor-pointer'
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <GalleryModal isOpen={isOpen} photo={photo} onClose={handleClose} />
    </>
  )
}
