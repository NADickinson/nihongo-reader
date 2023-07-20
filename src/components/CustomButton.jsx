export const CustomButton = ({ text, style, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ padding: '5px', fontSize: '1.5rem', color: 'white', ...style }}
    >
      {text}
    </div>
  )
}
