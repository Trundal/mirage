import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

type ImageObjectProps = {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
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
    <div>
      {imageUrl && (
        <Image alt={alt} width={width} height={height} src={imageUrl} />
      )}
    </div>
  )
}
