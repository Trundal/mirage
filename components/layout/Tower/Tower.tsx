import styles from './Tower.module.css'

type TowerTypes = {
  children?: string | JSX.Element | JSX.Element[]
  margin?: string
  padding?: string
}

export default function Tower({ children, margin, padding }: TowerTypes) {
  return (
    <section className={styles.tower} style={{ margin, padding }}>
      {children}
    </section>
  )
}
