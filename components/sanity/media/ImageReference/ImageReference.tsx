import Image from 'next/image'

import styles from './ImageReference.module.css'

import { urlForImage } from '@/sanity/lib/utils'
import Link from 'next/link'

type ImageReferenceProps = {
  coverImage: {
    image: {
      asset: any
      alt: string
    }
  }
  slug?: string
  name?: number
  client?: number
  height?: number
  width?: number
}

export default function ImageReference({
  coverImage,
  slug,
  name,
  width = 3500,
  height = 2000,
  client,
}: ImageReferenceProps) {
  const imageUrl =
    coverImage &&
    urlForImage(coverImage?.image)
      ?.height(height)
      .width(width)
      .fit('crop')
      .url()

  return (
    <Link href={`/portfolio/${slug}`} passHref>
      <div className={styles.imageWrapper}>
        {imageUrl && (
          <>
            <Image
              alt={coverImage.image.alt}
              width={width}
              height={height}
              src={imageUrl}
            />
            <div className={styles.titleWrapper}>
              {name && <div className={styles.projectText}>{name}</div>}
              {client && <div className={styles.clientText}>{client}</div>}
            </div>
          </>
        )}
      </div>
    </Link>
  )
}
