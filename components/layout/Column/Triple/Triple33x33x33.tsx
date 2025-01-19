import { getMedia } from '@/app/(portfolio)/functions'
import Column from '@/components/layout/Column/Column'
import ColumnContainer from '../Container/Container'

export default function Triple33x33x33({ left33, center33, right33 }) {
  return (
    <ColumnContainer>
      <Column width={33}>
        <div>{left33?.map((media) => getMedia(media))}</div>
      </Column>
      <Column width={33}>
        <div>{center33?.map((media) => getMedia(media))}</div>
      </Column>
      <Column width={33}>
        <div>{right33?.map((media) => getMedia(media))}</div>
      </Column>
    </ColumnContainer>
  )
}
