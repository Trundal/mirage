import styles from './Column.module.css'

type GapTypes = 10 | 15 | 25 | 35 | 50
type AlignTypes = 'center' | 'start' | 'end'
type WidthTypes = 33 | 50 | 66 | 100
type WrapTypes = 'nowrap' | 'wrap' | 'wrap-reverse'

export type ColumnOptionsTypes = {
  vAlign?: AlignTypes
  hAlign?: AlignTypes
  width?: WidthTypes
}

export type ContainerOptionsTypes = {
  gap?: GapTypes
  wrap?: WrapTypes
  vAlign?: AlignTypes
  hAlign?: AlignTypes
  margin?: string
  padding?: string
}

const getGap = (gap: GapTypes) => styles[`Col-gap--${gap}`]
const getWrap = (wrap: WrapTypes) => styles[`Col-wrap--${wrap}`]
const getVAlign = (align: AlignTypes) => styles[`V-Align--${align}`]
const getHAlign = (align: AlignTypes) => styles[`H-Align--${align}`]
const getWidth = (width: WidthTypes) =>
  width ? styles[`Col-${width}`] : styles[`Col-100`]

export const getContainerStyles = (options: ContainerOptionsTypes) => {
  return [
    styles.Columns,
    options.vAlign && getVAlign(options.vAlign),
    options.hAlign && getHAlign(options.hAlign),
    options.gap && getGap(options.gap),
    options.wrap && getWrap(options.wrap),
  ].join(' ')
}

export const getColumnStyles = (options: ColumnOptionsTypes) => {
  return [
    options.width && getWidth(options.width),
    options.vAlign && getVAlign(options.vAlign),
    options.hAlign && getHAlign(options.hAlign),
  ].join(' ')
}
