import { notFound } from 'next/navigation'
import AdminHeader from '@/components/page/admin/AdminHeader'
import PhotoForm from '@/components/page/admin/PhotoForm'
import { getPhoto } from '@/app/(admin)/queries/photos'

interface EditPhotoPageProps {
  params: Promise<{ id: string }>
}

export default async function EditPhotoPage({ params }: EditPhotoPageProps) {
  const { id } = await params

  let photo
  try {
    photo = await getPhoto(id)
  } catch {
    notFound()
  }

  return (
    <>
      <AdminHeader />
      <div className='p-6'>
        <h2 className='text-xl font-bold mb-6'>写真を編集</h2>
        <div className='max-w-lg'>
          <PhotoForm mode='edit' photo={photo} />
        </div>
      </div>
    </>
  )
}
