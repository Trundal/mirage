import { getMedia } from '@/app/(portfolio)/functions'
import Column from '@/components/layout/Column/Column'
import ColumnContainer from '../Container/Container'

export default function Double66x33({ left66, right33 }) {
  return (
    <ColumnContainer>
      <Column width={66}>
        <div>{left66?.map((media) => getMedia(media))}</div>
      </Column>
      <Column width={33}>
        <div>{right33?.map((media) => getMedia(media))}</div>
      </Column>
    </ColumnContainer>
  )
}
