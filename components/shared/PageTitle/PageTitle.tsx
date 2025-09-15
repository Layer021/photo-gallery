import clsx from 'clsx'

export interface PageTitleProps {
  children: React.ReactNode
  className?: string
  component?: React.ElementType
}

export default function PageTitle({
  children,
  className,
  component: Component = 'h1',
}: PageTitleProps) {
  return (
    <Component className={clsx('text-4xl/none text-center', className)}>
      <span className='inline-block border-b-1 border-gray-600 pb-2'>{children}</span>
    </Component>
  )
}
