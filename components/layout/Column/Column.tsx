import { ColumnOptionsTypes, getColumnStyles } from './Column.functions'

type ColumnTypes = ColumnOptionsTypes & {
  children?: JSX.Element | JSX.Element[]
}

export default function Column({
  children,
  width,
  vAlign,
  hAlign,
}: ColumnTypes) {
  return (
    <section
      className={getColumnStyles({
        width: width,
        vAlign: vAlign,
        hAlign: hAlign,
      })}
    >
      {children}
    </section>
  )
}
