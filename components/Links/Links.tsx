import Link from 'next/link'

import { MenuItem, SettingsPayload } from '@/types'

import { links } from './Links.functions'
import styles from './Links.module.css'

type NavbarProps = {
  data: SettingsPayload
}

export default function Links(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])

  return (
    <div className={styles.linkWrapper}>
      {links.map((link) => (
        <div key={link.name} className={styles.link}>
          <Link href={link.src}>{link.name}</Link>
        </div>
      ))}
    </div>
  )
}
