import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from 'next-sanity'

import { links } from '@/components/Links/Links.functions'
import type { SettingsPayload } from '@/types'

import styles from './Footer.module.css'
import P from '@/components/library/Text/Paragraph'

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
      <div className={styles.footerLinks}>
        <div className={styles.homeLink}>
          <Link href={'/'}>
            <Image src={'/icon-home.png'} width={75} height={75} alt={'logo'} />
          </Link>
        </div>
        <div className={styles.socialMedia}>
          {links?.map((link) => (
            <div key={link.name} className={styles.socialMediaLink}>
              <Link href={link.src}>
                <P>{link.name}</P>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
