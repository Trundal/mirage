import Image from 'next/image'

import styles from './ImageObject.module.css'

import { urlForImage } from '@/sanity/lib/utils'

type ImageObjectProps = {
  image?: {
    asset?: any
    alt?: any
  }
  width?: number
  height?: number
}

export default function ImageObject({
  image,
  width = 3500,
  height = 2000,
}: ImageObjectProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <div className={styles.imageWrapper}>
      {imageUrl && (
        <Image alt={image.alt} width={width} height={height} src={imageUrl} />
      )}
    </div>
  )
}
