import React from 'react'
import { style as jss } from 'typestyle'
import classnames from 'classnames'
import {
  AxisSize,
  DirectionContext,
  Alignment,
  decodeAlignment,
  decodeAxisSize
} from '../../style'

export type ColumnProps = {
  className?: string
  mainAxisAlignment?: Alignment
  crossAxisAlignment?: Alignment
  mainAxisSize?: AxisSize
  crossAxisSize?: AxisSize
  style?: React.CSSProperties
}

/**
 * 上下布局的组件。
 * 高宽默认最大。
 */
export default function Column({
  className = '',
  crossAxisAlignment = 'normal',
  mainAxisAlignment = 'start',
  mainAxisSize = 'max',
  crossAxisSize = 'max',
  children,
  ...restProps
}: React.PropsWithChildren<ColumnProps>) {
  const classname = jss({
    display: 'flex',
    flexDirection: 'column',
    alignItems: decodeAlignment(crossAxisAlignment),
    justifyContent: decodeAlignment(mainAxisAlignment),
    width: '100%',
    height: decodeAxisSize(mainAxisSize)
  })

  return (
    <DirectionContext.Provider value="column">
      <div
        debug-label="Column"
        className={classnames(classname, className)}
        {...restProps}
      >
        {children}
      </div>
    </DirectionContext.Provider>
  )
}
