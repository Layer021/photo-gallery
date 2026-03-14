import AdminHeader from '@/components/page/admin/AdminHeader'

export default function AdminTopPage() {
  return (
    <>
      <AdminHeader />
      <div className='p-6'>
        <h2 className='text-xl font-bold mb-4'>写真管理</h2>
        <p className='text-sm text-gray-500'>写真のCRUD機能は今後実装予定です。</p>
      </div>
    </>
  )
}
