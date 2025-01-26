import { getMedia } from '@/app/(portfolio)/functions'
import Column from '@/components/layout/Column/Column'
import ColumnContainer from '../Container/Container'
import ImageReference from '@/components/sanity/media/ImageReference/ImageReference'

type Double50x50Types = {
  left50?: any
  right50?: any
  left50_ref?: any
  right50_ref?: any
}

export default function Double50x50({
  left50,
  right50,
  left50_ref,
  right50_ref,
}: Double50x50Types) {
  return (
    <ColumnContainer>
      <Column width={50}>
        {left50 && <div>{left50.map((media) => getMedia(media))}</div>}
        {left50_ref && <ImageReference {...left50_ref} />}
      </Column>
      <Column width={50}>
        {right50 && <div>{right50.map((media) => getMedia(media))}</div>}
        {right50_ref && <ImageReference {...right50_ref} />}
      </Column>
    </ColumnContainer>
  )
}
