import { ContainerOptionsTypes, getContainerStyles } from '../Column.functions'

type ColumnsContainerTypes = ContainerOptionsTypes & {
  children?: JSX.Element | JSX.Element[]
}

export default function ColumnContainer({
  children,
  gap,
  wrap,
  vAlign,
  hAlign,
  margin,
  padding,
}: ColumnsContainerTypes) {
  return (
    <section
      className={getContainerStyles({
        gap: gap,
        vAlign: vAlign,
        hAlign: hAlign,
        wrap: wrap,
      })}
      style={{ margin, padding }}
    >
      {children}
    </section>
  )
}
