import styles from './Tags.module.css'
import { tags } from './Tags.functions'

export default function Tags() {
  return (
    <div className={styles.tagWrapper}>
      {tags.map((tag, index) => (
        <div key={`${tag}_${index}`} className={styles.tag}>
          {tag}
        </div>
      ))}
    </div>
  )
}
