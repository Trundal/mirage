import styles from './Text.module.css'

type H3Types = {
  children?: string | JSX.Element
  textAlign?: 'left' | 'center' | 'right'
}

export default function H3({ children, textAlign = 'left' }: H3Types) {
  return (
    <h3 className={styles.h3} style={{ textAlign }}>
      {children}
    </h3>
  )
}
