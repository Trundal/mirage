import Tags from '../../Tags/Tags'
import styles from './Footer.module.css'
import Links from '../../Links/Links'

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <Tags />
      <Links />
    </div>
  )
}
