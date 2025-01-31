import styles from './Text.module.css'

type H1Types = {
  children: string
  textAlign?: 'left' | 'center' | 'right'
}

export default function H2({ children, textAlign = 'left' }: H1Types) {
  return (
    <h2 className={styles.h2} style={{ textAlign }}>
      {children}
    </h2>
  )
}
