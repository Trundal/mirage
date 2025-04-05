import { getMedia } from '@/app/(portfolio)/functions'
import ImageReference from '@/components/sanity/media/ImageReference/ImageReference'

import Media from '../../Media/Media'
import Row from '../../Row/Row'

type Double33x66Types = {
  left33?: any
  right66?: any
  left33_ref?: any
  right66_ref?: any
}

export default function Double33x66({
  left33,
  right66,
  left33_ref,
  right66_ref,
}: Double33x66Types) {
  return (
    <Row>
      <Media width={33}>
        {left33 && <div>{left33.map((media) => getMedia(media))}</div>}
        {left33_ref && <ImageReference {...right66_ref} />}
      </Media>
      <Media width={66}>
        {right66 && <div>{right66.map((media) => getMedia(media))}</div>}
        {right66_ref && <ImageReference {...right66_ref} />}
      </Media>
    </Row>
  )
}
