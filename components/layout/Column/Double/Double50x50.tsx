import { getMedia } from '@/app/(portfolio)/functions'
import Column from '@/components/layout/Column/Column'
import ColumnContainer from '../Container/Container'

export default function Double50x50({ left50, right50 }) {
  return (
    <ColumnContainer>
      <Column width={50}>
        <div>{left50?.map((media) => getMedia(media))}</div>
      </Column>
      <Column width={50}>
        <div>{right50?.map((media) => getMedia(media))}</div>
      </Column>
    </ColumnContainer>
  )
}
