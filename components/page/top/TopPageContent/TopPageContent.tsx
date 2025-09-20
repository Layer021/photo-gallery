'use client'

import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

const SLIDES = [
  { id: 1, imageUrl: '/img_dev/photo1.jpg' },
  { id: 3, imageUrl: '/img_dev/photo3.jpg' },
  { id: 6, imageUrl: '/img_dev/photo6.jpg' },
  { id: 2, imageUrl: '/img_dev/photo2.jpg' },
] as const

export default function TopPageContent() {
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
        speed={3500}
        loop
      >
        {SLIDES.map(slide => (
          <SwiperSlide key={slide.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.imageUrl}
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
