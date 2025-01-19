import { getMedia } from '@/app/(portfolio)/functions'
import Column from '@/components/layout/Column/Column'
import ColumnContainer from '../Container/Container'

export default function Double33x66({ left33, right66 }) {
  return (
    <ColumnContainer>
      <Column width={33}>
        <div>{left33?.map((media) => getMedia(media))}</div>
      </Column>
      <Column width={66}>
        <div>{right66?.map((media) => getMedia(media))}</div>
      </Column>
    </ColumnContainer>
  )
}
