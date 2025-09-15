import { ROUTES } from '@/utils/constants/routes'
import { EXTERNAL_LINKS } from '@/utils/constants/externalLinks'
import Link from 'next/link'
import InstagramIcon from '@/public/img/Instagram.svg'

const MENU_ITEMS = [
  { label: 'PROFILE', href: ROUTES.PROFILE },
  { label: 'GALLERY', href: ROUTES.GALLERY },
  { label: 'CONTACT', href: ROUTES.CONTACT },
] as const

export default function Header() {
  return (
    <header className='flex items-center h-[70px] px-6'>
      <h1 className='mr-auto text-2xl/none'>
        <Link href={ROUTES.ROOT} className='hover:opacity-50 duration-200'>
          PHOTO GALLERY
        </Link>
      </h1>
      <nav>
        <ul className='flex gap-5 items-center leading-none'>
          {MENU_ITEMS.map(item => (
            <li key={item.href}>
              <Link href={item.href} className='hover:opacity-50 duration-200'>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={EXTERNAL_LINKS.INSTAGRAM}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-50 duration-200'
            >
              <InstagramIcon width={28} height={28} className='fill-gray-500' />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
