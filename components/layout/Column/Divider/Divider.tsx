import Column from '@/components/layout/Column/Column'
import ColumnContainer from '../Container/Container'

export default function Divder({ text }) {
  return (
    <ColumnContainer>
      <Column>
        <div>{text}</div>
      </Column>
    </ColumnContainer>
  )
}
