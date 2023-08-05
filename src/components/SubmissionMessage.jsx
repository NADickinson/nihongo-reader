/** @jsxImportSource @emotion/react */
export const SubmissionMessage = ({ opacity }) => {
  return (
    <div
      css={{
        position: 'absolute',
        color: 'white',
        minWidth: '200px',
        backgroundColor: '#18344E',
        border: '1px solid #B5ADB7',
        borderRadius: '0.5rem',
        transition: 'opacity 3000ms',
        opacity: opacity,
        pointerEvents: 'none',
      }}
    >
      {'Thankyou for your Rating!'}
    </div>
  )
}
