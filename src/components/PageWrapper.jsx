import React from 'react'

export const PageWrapper = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        inset: '0 0 0 0',
        backgroundColor: '#040825',
      }}
    >
      {props.children}
    </div>
  )
}
