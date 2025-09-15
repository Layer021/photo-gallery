export interface LowerLayoutProps {
  children: React.ReactNode
}

export default function LowerLayout(props: LowerLayoutProps) {
  return <div className='pt-header pb-footer'>{props.children}</div>
}
