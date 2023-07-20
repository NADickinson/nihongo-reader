import React from 'react'

export const Row = ({ gap, children, justify, align }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: justify,
        alignItems: align,
        gap: gap,
      }}
    >
      {children}
    </div>
  )
}
