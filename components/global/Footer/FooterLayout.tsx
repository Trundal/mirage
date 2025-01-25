import { PortableText } from 'next-sanity'

import styles from './Footer.module.css'

import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer({ data }: FooterProps) {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.descriptionText}>
          {data?.description && <PortableText value={data?.description} />}
        </div>
        <div className={styles.contactWrapper}>
          <div>{data?.email}</div>
          <div>{data?.phone}</div>
          <div className={styles.addressText}>
            {data?.address && <PortableText value={data?.address} />}
          </div>
        </div>
      </div>
    </footer>
  )
}
