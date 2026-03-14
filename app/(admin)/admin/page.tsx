import AdminHeader from '@/components/page/admin/AdminHeader'
import PhotoListPage from '@/components/page/admin/PhotoListPage'
import { getPhotos } from '@/app/(admin)/queries/photos'

interface AdminTopPageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function AdminTopPage({
  searchParams,
}: AdminTopPageProps) {
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const data = await getPhotos(currentPage)

  return (
    <>
      <AdminHeader />
      <PhotoListPage data={data} currentPage={currentPage} />
    </>
  )
}
