import AdminHeader from '@/components/page/admin/AdminHeader'
import PhotoForm from '@/components/page/admin/PhotoForm'

export default function NewPhotoPage() {
  return (
    <>
      <AdminHeader />
      <div className='p-6'>
        <h2 className='text-xl font-bold mb-6'>写真を登録</h2>
        <div className='max-w-lg'>
          <PhotoForm mode='create' />
        </div>
      </div>
    </>
  )
}
