import { getMedia } from '@/app/(portfolio)/functions'
import ImageReference from '@/components/sanity/media/ImageReference/ImageReference'

import Media from '../../Media/Media'
import Row from '../../Row/Row'

type Double66x33Types = {
  left66?: any
  right33?: any
  left66_ref?: any
  right33_ref?: any
}

export default function Double66x33({
  left66,
  right33,
  left66_ref,
  right33_ref,
}: Double66x33Types) {
  return (
    <Row>
      <Media width={66}>
        {left66 && <div>{left66.map((media) => getMedia(media))}</div>}
        {left66_ref && <ImageReference {...left66_ref} />}
      </Media>
      <Media width={33}>
        {right33 && <div>{right33.map((media) => getMedia(media))}</div>}
        {right33_ref && <ImageReference {...right33_ref} />}
      </Media>
    </Row>
  )
}
