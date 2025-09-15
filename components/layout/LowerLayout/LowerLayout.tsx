export interface LowerLayoutProps {
  children: React.ReactNode
}

export default function LowerLayout(props: LowerLayoutProps) {
  return <div className='mt-header pt-15 pb-footer'>{props.children}</div>
}
