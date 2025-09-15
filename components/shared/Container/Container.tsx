import clsx from 'clsx'

export interface ContainerProps {
  children: React.ReactNode
  disableGutter?: boolean
  className?: string
}

export default function Container({ children, disableGutter = false, className }: ContainerProps) {
  return (
    <div className={clsx('container mx-auto', { 'px-4': !disableGutter }, className)}>
      {children}
    </div>
  )
}
