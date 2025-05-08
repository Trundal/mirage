import styles from './Row.module.css'

type RowTypes = {
  children?: JSX.Element | JSX.Element[]
}

export default function Row({ children }: RowTypes) {
  return <section className={styles.row}>{children}</section>
}
