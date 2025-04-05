import styles from './Section.module.css'

type SectionTypes = {
  children?: JSX.Element | JSX.Element[]
}

export default function Section({ children }: SectionTypes) {
  return <section className={styles.section}>{children}</section>
}
