import styles from './Text.module.css'

type H1Types = {
  children?: string | JSX.Element
  textAlign?: 'left' | 'center' | 'right'
}

export default function H1({ children, textAlign = 'left' }: H1Types) {
  return (
    <h1 className={styles.h1} style={{ textAlign }}>
      {children}
    </h1>
  )
}
