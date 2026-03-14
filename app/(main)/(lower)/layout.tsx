import LowerLayout from '@/components/layout/LowerLayout'

export default function LowerGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <LowerLayout>{children}</LowerLayout>
}
