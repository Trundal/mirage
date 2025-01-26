import styles from './TextObject.module.css'

import { PortableText, PortableTextBlock } from 'next-sanity'

type TextObjectProps = {
  textBlock: PortableTextBlock
}

export default function TextObject({ textBlock }: TextObjectProps) {
  console.log(textBlock)
  return (
    <div className={styles.textWrapper}>
      {textBlock && (
        <div className={styles.text}>
          <PortableText value={textBlock} />
        </div>
      )}
    </div>
  )
}
