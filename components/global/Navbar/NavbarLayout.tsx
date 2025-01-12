import Link from 'next/link'

import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

import styles from './Navbar.module.css'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])

  console.log('Links: menuItems = ', menuItems)

  return (
    <div className={styles.linkWrapper}>
      {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <div key={key} className={styles.link}>
              <Link href={href}>{menuItem.title}</Link>
            </div>
          )
        })}
    </div>
  )
}
