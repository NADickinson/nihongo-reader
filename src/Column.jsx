import React from 'react'

export const Column = ({ gap, children, justify, align }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justify,
        alignItems: align,
        gap: gap,
      }}
    >
      {children}
    </div>
  )
}
