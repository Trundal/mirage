import P from '../Text/Paragraph'
import styles from './Badge.module.css'

const Badge = ({ text, isSelected = false, handleClick }) => {
  return (
    <div
      className={`${styles.badge} ${isSelected && styles.selected}`}
      onClick={() => handleClick(text)}
    >
      <P textAlign="center">{text}</P>
    </div>
  )
}

export default Badge
