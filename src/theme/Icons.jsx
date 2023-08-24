export const CrossIcon = ({ color, size }) => {
  return (
    <svg
      style={{
        display: 'block',
        height: size,
        width: size,
        fill: color,
        cursor: 'pointer',
      }}
      viewBox="0 -960 960 960"
    >
      <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
    </svg>
  )
}

export const ArrowIcon = ({ color, size }) => {
  return (
    <svg
      style={{
        display: 'block',
        height: size,
        width: size,
        fill: color,
        cursor: 'pointer',
      }}
      viewBox="0 -960 960 960"
    >
      <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" />
    </svg>
  )
}
