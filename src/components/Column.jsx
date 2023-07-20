import React from 'react'

export const Column = ({ gap, children, justify, align, flexGrow }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justify,
        alignItems: align,
        gap,
        flexGrow,
      }}
    >
      {children}
    </div>
  )
}
