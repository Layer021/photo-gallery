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
    <header className='flex'>
      <h1>
        <Link href={ROUTES.ROOT}>PHOTO GALLERY</Link>
      </h1>
      <nav>
        <ul className='flex'>
          {MENU_ITEMS.map(item => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <a href={EXTERNAL_LINKS.INSTAGRAM}>
              <InstagramIcon width={24} height={24} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
