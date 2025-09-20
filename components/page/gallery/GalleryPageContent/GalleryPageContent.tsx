'use client'

import Container from '@/components/shared/Container'
import PageTitle from '@/components/shared/PageTitle'
import { ROUTES } from '@/utils/constants/routes'
import Link from 'next/link'
import { useGalleryModal } from './GalleryPageContent.hooks'
import GalleryModal from '../GalleryModal'
import { API_ENDPOINTS } from '@/utils/constants/apiEndpoints'
import { Photo } from '@/utils/types/response'
import { useSuspenseFetch } from '@/hooks/useSuspenseFetch'

export default function GalleryPageContent() {
  const { data: photos } = useSuspenseFetch<Photo[]>(API_ENDPOINTS.PHOTOS)
  const { isOpen, photo, handleClose } = useGalleryModal()

  return (
    <>
      <PageTitle className='mb-14'>GALLERY</PageTitle>
      <Container>
        <ul className='grid grid-cols-3 gap-6'>
          {photos.map(item => (
            <li key={item.id} className='overflow-hidden rounded-lg'>
              <Link href={ROUTES.GALLERY_DETAIL(item.id)} replace>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={`Photo ${item.id}`}
                  loading='lazy'
                  className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 cursor-pointer aspect-[3/2]'
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
