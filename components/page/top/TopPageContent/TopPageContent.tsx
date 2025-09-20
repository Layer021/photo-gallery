'use client'

import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { API_ENDPOINTS } from '@/utils/constants/apiEndpoints'
import { useSuspenseFetch } from '@/hooks/useSuspenseFetch'
import { Photo } from '@/utils/types/response'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

export default function TopPageContent() {
  const { data: photos } = useSuspenseFetch<Photo[]>(
    `${API_ENDPOINTS.PHOTOS}?only_show_on_top=true`
  )

  return (
    <>
      <div
        className='absolute top-0 left-0 w-full h-full z-10 bg-white/10 flex items-center justify-center text-3xl font-bold text-white'
        style={{
          backgroundImage:
            'radial-gradient(gray 20%, transparent 20%), radial-gradient(gray 20%, transparent 20%)',
          backgroundSize: '5px 5px',
          backgroundPosition: '0 0, 2.5px 2.5px',
        }}
      />
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        autoplay={{ delay: 4000 }}
        speed={2500}
        loop
      >
        {photos.map(photo => (
          <SwiperSlide key={photo.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.imageUrl}
              alt=''
              className='h-screen w-full object-cover'
              loading='lazy'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
