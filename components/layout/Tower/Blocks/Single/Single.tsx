import { getMedia } from '@/app/(portfolio)/functions'
import ImageReference from '@/components/sanity/media/ImageReference/ImageReference'

import Media from '../../Media/Media'
import Row from '../../Row/Row'

type SingleColumnTypes = {
  singleColumn?: any
  singleColumn_ref?: any
}

export default function SingleColumn({
  singleColumn,
  singleColumn_ref,
}: SingleColumnTypes) {
  return (
    <Row>
      <Media>
        {singleColumn && (
          <div>{singleColumn.map((media) => getMedia(media))}</div>
        )}
        {singleColumn_ref && <ImageReference {...singleColumn_ref} />}
      </Media>
    </Row>
  )
}
