import styles from './Text.module.css'

type PTypes = {
  children?: string | JSX.Element
  textAlign?: 'left' | 'center' | 'right'
}

export default function P({ children, textAlign = 'left' }: PTypes) {
  return (
    <p className={styles.p} style={{ textAlign }}>
      {children}
    </p>
  )
}
