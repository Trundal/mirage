import P from '../Text/Paragraph'
import styles from './Badge.module.css'

type BadgeTypes = {
  text: string
  selected?: boolean
  handleClick?: (arg0: string) => void
}

const Badge = ({ text, selected = false, handleClick }: BadgeTypes) => {
  return (
    <div
      className={`${styles.badge} ${selected && styles.selected}`}
      onClick={() => handleClick && handleClick(text)}
    >
      <P textAlign="center">{text}</P>
    </div>
  )
}

export default Badge
