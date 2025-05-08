import { getMedia } from '@/app/(portfolio)/functions'

import Media from '../../Media/Media'
import Row from '../../Row/Row'

export default function Triple33x33x33({ left33, center33, right33 }) {
  return (
    <Row>
      <Media width={33}>
        <div>{left33?.map((media) => getMedia(media))}</div>
      </Media>
      <Media width={33}>
        <div>{center33?.map((media) => getMedia(media))}</div>
      </Media>
      <Media width={33}>
        <div>{right33?.map((media) => getMedia(media))}</div>
      </Media>
    </Row>
  )
}
