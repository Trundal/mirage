import Image from 'next/image'

import styles from './ImageObject.module.css'

import { urlForImage } from '@/sanity/lib/utils'
import Link from 'next/link'

type ImageObjectProps = {
  image?: {
    asset?: any
    projectName: string
    clientName: string
    projectReference: string
  }
  alt?: string
  width?: number
  height?: number
  slugReference?: string
}

export default function ImageObject({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
}: ImageObjectProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <Link href={`/portfolio/${image?.projectReference}`} passHref>
      <div className={styles.imageWrapper}>
        {imageUrl && (
          <>
            <Image alt={alt} width={width} height={height} src={imageUrl} />
            <div className={styles.titleWrapper}>
              {image.projectName && (
                <div className={styles.projectText}>{image.projectName}</div>
              )}
              {image.clientName && (
                <div className={styles.clientText}>{image.clientName}</div>
              )}
            </div>
          </>
        )}
      </div>
    </Link>
  )
}
