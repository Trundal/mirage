import { getMedia } from '@/app/(portfolio)/functions'
import Column from '@/components/layout/Column/Column'
import ColumnContainer from '../Container/Container'

export default function SingleColumn({ singleColumn }) {
  return (
    <ColumnContainer>
      <Column>
        <div>{singleColumn?.map((media) => getMedia(media))}</div>
      </Column>
    </ColumnContainer>
  )
}
