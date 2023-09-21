import styles from './Container.module.css'

type PageContainerTypes = {
  children: string | JSX.Element | JSX.Element[]
}

export default function PageContainer({ children }: PageContainerTypes) {
  return <div className={styles.container}>{children}</div>
}
