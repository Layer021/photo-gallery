import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50'>
        <Header />
      </div>
      <main>{children}</main>
      <div className='fixed bottom-0 left-0 w-full z-50'>
        <Footer />
      </div>
    </>
  )
}
