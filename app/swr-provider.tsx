'use client'

import { SWRConfig, SWRConfiguration } from 'swr'

export default function SWRProvider({
  value,
  children,
}: Readonly<{
  value?: SWRConfiguration | ((parent?: SWRConfiguration) => SWRConfiguration)
  children: React.ReactNode
}>) {
  return <SWRConfig value={value}>{children}</SWRConfig>
}
