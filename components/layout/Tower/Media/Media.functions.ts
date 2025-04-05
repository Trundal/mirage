import styles from './Media.module.css'

export const getMediaStyles = (width: number = 100) => {
  switch (width) {
    case 33:
      return styles.w_33
    case 50:
      return styles.w_50
    case 66:
      return styles.w_66
    default:
      return styles.w_100
  }
}
