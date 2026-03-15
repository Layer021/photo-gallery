import ContactForm from '@/components/page/contact/ContactForm/ContactForm'
import PageTitle from '@/components/shared/PageTitle'

export default function ContactPage() {
  return (
    <>
      <PageTitle>CONTACT</PageTitle>
      <div className='px-6 py-10'>
        <ContactForm />
      </div>
    </>
  )
}
