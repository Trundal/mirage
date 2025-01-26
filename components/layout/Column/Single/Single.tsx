import { getMedia } from '@/app/(portfolio)/functions'
import Column from '@/components/layout/Column/Column'

import ColumnContainer from '../Container/Container'
import ImageReference from '@/components/sanity/media/ImageReference/ImageReference'

type SingleColumnTypes = {
  singleColumn?: any
  singleColumn_ref?: any
}

export default function SingleColumn({
  singleColumn,
  singleColumn_ref,
}: SingleColumnTypes) {
  return (
    <ColumnContainer>
      <Column>
        {singleColumn && (
          <div>{singleColumn.map((media) => getMedia(media))}</div>
        )}
        {singleColumn_ref && <ImageReference {...singleColumn_ref} />}
      </Column>
    </ColumnContainer>
  )
}
