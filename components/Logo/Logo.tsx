import Image from 'next/image'

import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <Image
        src="/mirage_logo_rotated_white_v7.svg"
        width={217}
        height={898}
        alt="Logo"
        className={styles.image}
      />
    </div>
  )
}
