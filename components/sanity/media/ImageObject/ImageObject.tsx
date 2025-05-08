import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

import styles from './ImageObject.module.css'

type ImageObjectProps = {
  image?: {
    asset?: any
    alt?: any
  }
  width?: number
  height?: number
}

export default function ImageObject({ image }: ImageObjectProps) {
  const imageUrl = image && urlForImage(image)?.fit('crop').url()

  if (!image?.asset?._ref) return null

  const ref = image.asset._ref
  const match = ref.match(/-(\d+)x(\d+)-/)
  const width = match ? parseInt(match[1], 10) : 16
  const height = match ? parseInt(match[2], 10) : 9
  const aspectRatio = width / height

  return (
    <div className={styles.imageWrapper} style={{ aspectRatio }}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={image.alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}
    </div>
  )
}
