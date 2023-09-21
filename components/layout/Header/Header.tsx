import Logo from '../../Logo/Logo'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <div className={styles.titleWrapper}>
        <div className={styles.name}>MIRAGE VIRTUAL ART DEPARTMENT GMBH</div>
        <div className={styles.date}>EST. 2022</div>
      </div>
    </div>
  )
}
