import styles from './Text.module.css'

type H3Types = {
  children: string
}

export default function H3({ children }: H3Types) {
  return <h3 className={styles.h3}>{children}</h3>
}
