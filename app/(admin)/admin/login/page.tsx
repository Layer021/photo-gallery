import LoginForm from '@/components/page/admin/LoginForm'

export default function LoginPage() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
    <div className='w-full max-w-md p-8'>
      <h1 className='text-2xl font-bold text-center mb-8'>管理者ログイン</h1>
      <LoginForm />
    </div>
    </div>
  )
}
