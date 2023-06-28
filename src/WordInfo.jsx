export const WordInfo = ({ word, meaning, type }) => {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: ' #342F35',
        maxHeight: '200px',
        maxWidth: '300px',
        border: '3px solid #B5ADB7',
      }}
    >
      <div style={{ color: 'white' }}>{word}</div>
      <div style={{ color: 'white' }}>{meaning}</div>
      <div style={{ color: 'white' }}>{type}</div>
    </div>
  )
}
