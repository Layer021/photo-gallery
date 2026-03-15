import { EXTERNAL_LINKS } from '@/utils/constants/externalLinks'
import InstagramIcon from '@/public/img/Instagram.svg'
import Image from 'next/image'

export default function ProfilePageContent() {
  return (
    <div className='flex flex-col items-center gap-6 px-6 py-10'>
      <div className='relative h-40 w-40 overflow-hidden rounded-full bg-gray-200'>
        <Image
          src='/img/profile.jpg'
          alt='Motoshi'
          fill
          className='object-cover'
        />
      </div>

      <h2 className='text-2xl'>Motoshi</h2>

      <p
        className='text-center text-sm leading-relaxed'
        style={{ fontFamily: 'system-ui, sans-serif' }}
      >
        東京都内や湘南エリアで撮影したスナップ写真を中心に投稿しています。
      </p>

      <a
        href={EXTERNAL_LINKS.INSTAGRAM}
        target='_blank'
        rel='noopener noreferrer'
        className='hover:opacity-50 duration-200'
      >
        <InstagramIcon width={28} height={28} className='fill-current' />
      </a>
    </div>
  )
}
