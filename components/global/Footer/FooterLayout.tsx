import { PortableText } from 'next-sanity'

import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer({ data }: FooterProps) {
  console.log('Footer: data = ', data)
  return (
    <footer>
      <div>
        <div>
          {data?.description && <PortableText value={data?.description} />}
        </div>
        <div>
          <div>{data?.email}</div>
          <div>{data?.phone}</div>
          <div>{data?.address && <PortableText value={data?.address} />}</div>
        </div>
      </div>
    </footer>
  )
}
