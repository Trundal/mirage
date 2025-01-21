import Logo from '../../Logo/Logo'
import styles from './LogoHeader.module.css'

export default function LogoHeader() {
  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <div className={styles.titleWrapper}>
        <div className={styles.name}>MIRAGE VIRTUAL ART DEPARTMENT GMBH</div>
      </div>
    </div>
  )
}
