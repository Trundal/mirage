import Tags from '@/components/Tags/Tags'
import styles from './Footer.module.css'
import Links from '@/components/Links/Links'

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <Tags />
      <Links />
    </div>
  )
}
