import styles from './Logo.module.css'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <img src="/logo.png" alt="Logo" className={styles.image} />
    </div>
  )
}
