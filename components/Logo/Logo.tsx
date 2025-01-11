import Image from 'next/image'

import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <img
        src="/mirage_logo_rotated_white_v7.svg"
        alt="Logo"
        className={styles.image}
      />
    </div>
  )
}
