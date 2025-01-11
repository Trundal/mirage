import styles from './Links.module.css'
import { links } from './Links.functions'
import Link from 'next/link'

export default function Links() {
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
