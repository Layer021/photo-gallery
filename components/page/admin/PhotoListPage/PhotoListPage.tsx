import Link from 'next/link'
import { ROUTES } from '@/utils/constants/routes'
import type { AdminPhoto, PaginatedResponse } from '@/utils/types/response'
import DeleteButton from './DeleteButton'

interface PhotoListPageProps {
  data: PaginatedResponse<AdminPhoto>
  currentPage: number
}

export default function PhotoListPage({ data, currentPage }: PhotoListPageProps) {
  return (
    <div className='p-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold'>写真管理</h2>
        <Link
          href={ROUTES.ADMIN_PHOTOS_NEW}
          className='rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-800'
        >
          新規登録
        </Link>
      </div>

      {data.data.length === 0 ? (
        <p className='text-sm text-gray-500'>写真が登録されていません。</p>
      ) : (
        <>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='border-b border-gray-200 text-left'>
                <th className='py-3 pr-4'>画像</th>
                <th className='py-3 pr-4'>ID</th>
                <th className='py-3 pr-4'>トップ表示</th>
                <th className='py-3 pr-4'>有効</th>
                <th className='py-3 pr-4'>作成日</th>
                <th className='py-3'>操作</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map(photo => (
                <tr key={photo.id} className='border-b border-gray-100'>
                  <td className='py-3 pr-4'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photo.imageUrl} alt='' className='h-12 w-18 object-cover rounded' />
                  </td>
                  <td className='py-3 pr-4'>{photo.id}</td>
                  <td className='py-3 pr-4'>
                    <span
                      className={`inline-block rounded px-2 py-0.5 text-xs ${
                        photo.showOnTop ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {photo.showOnTop ? 'ON' : 'OFF'}
                    </span>
                  </td>
                  <td className='py-3 pr-4'>
                    <span
                      className={`inline-block rounded px-2 py-0.5 text-xs ${
                        photo.enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {photo.enabled ? '有効' : '無効'}
                    </span>
                  </td>
                  <td className='py-3 pr-4'>
                    {new Date(photo.createdAt).toLocaleDateString('ja-JP')}
                  </td>
                  <td className='py-3'>
                    <div className='flex gap-2'>
                      <Link
                        href={ROUTES.ADMIN_PHOTOS_EDIT(photo.id)}
                        className='text-blue-600 hover:text-blue-800'
                      >
                        編集
                      </Link>
                      <DeleteButton photoId={photo.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {data.meta.last_page > 1 && (
            <div className='mt-4 flex items-center justify-center gap-4'>
              {data.links.prev ? (
                <Link
                  href={`${ROUTES.ADMIN}?page=${currentPage - 1}`}
                  className='rounded border border-gray-300 px-3 py-1 text-sm'
                >
                  前へ
                </Link>
              ) : (
                <span className='rounded border border-gray-300 px-3 py-1 text-sm opacity-50'>
                  前へ
                </span>
              )}
              <span className='text-sm text-gray-600'>
                {data.meta.current_page} / {data.meta.last_page}
              </span>
              {data.links.next ? (
                <Link
                  href={`${ROUTES.ADMIN}?page=${currentPage + 1}`}
                  className='rounded border border-gray-300 px-3 py-1 text-sm'
                >
                  次へ
                </Link>
              ) : (
                <span className='rounded border border-gray-300 px-3 py-1 text-sm opacity-50'>
                  次へ
                </span>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
