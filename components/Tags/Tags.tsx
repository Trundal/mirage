import styles from './Tags.module.css'
import { tags } from './Tags.functions'

export default function Tags() {
  return (
    <div className={styles.tagWrapper}>
      {tags.map((tag) => (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))}
    </div>
  )
}
