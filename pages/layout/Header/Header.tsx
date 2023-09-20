import Logo from '../../../components/Logo/Logo'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.titleWrapper}>
      <Logo />
      <div className={styles.rotate}>
        <div className={styles.name}>MIRAGE VIRTUAL ART DEPARTMENT GMBH</div>
        <div className={styles.date}>EST. 2022</div>
      </div>
    </div>
  )
}
