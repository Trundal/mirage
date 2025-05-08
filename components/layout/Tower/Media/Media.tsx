import { getMediaStyles } from './Media.functions'
import styles from './Media.module.css'

type MediaTypes = {
  children?: JSX.Element | JSX.Element[]
  width?: 33 | 50 | 66 | 100
}

export default function Media({ children, width }: MediaTypes) {
  return (
    <div className={`${styles.image} ${getMediaStyles(width)}`}>{children}</div>
  )
}
