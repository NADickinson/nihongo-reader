import React from 'react'

export const PageWrapper = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        inset: '0 0 0 0',
        backgroundColor: '#DD895D',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </div>
  )
}
