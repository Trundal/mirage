import Logo from '../../Logo/Logo'
import styles from './LogoHeader.module.css'

export default function LogoHeader({ opacity = 1, hasSubtitle = false }) {
  return (
    <div className={styles.headerWrapper}>
      <Logo opacity={opacity} />
      {hasSubtitle && (
        <div className={styles.titleWrapper}>
          <div className={styles.name}>MIRAGE VIRTUAL ART DEPARTMENT GMBH</div>
        </div>
      )}
    </div>
  )
}
