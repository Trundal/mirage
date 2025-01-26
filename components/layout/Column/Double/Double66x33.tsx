import { getMedia } from '@/app/(portfolio)/functions'
import Column from '@/components/layout/Column/Column'
import ColumnContainer from '../Container/Container'
import ImageReference from '@/components/sanity/media/ImageReference/ImageReference'

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
    <ColumnContainer>
      <Column width={66}>
        {left66 && <div>{left66.map((media) => getMedia(media))}</div>}
        {left66_ref && <ImageReference {...left66_ref} />}
      </Column>
      <Column width={33}>
        {right33 && <div>{right33.map((media) => getMedia(media))}</div>}
        {right33_ref && <ImageReference {...right33_ref} />}
      </Column>
    </ColumnContainer>
  )
}
