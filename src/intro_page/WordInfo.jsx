import { CrossIcon } from '../theme/Icons'
import { redColor } from '../theme/theme'
export const WordInfo = ({ word, meaning, type, deselect }) => {
  const closeBox = () => {
    deselect()
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        position: 'absolute',
        padding: '0.5rem',
        backgroundColor: '#18344E',
        minWidth: '100px',
        maxWidth: '300px',
        border: '1px solid #B5ADB7',
        borderRadius: '0.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ color: 'white', whiteSpace: 'nowrap' }}>{word}</div>
        <div onClick={closeBox}>
          <CrossIcon color={redColor} size={'24px'} />
        </div>
      </div>
      <div style={{ color: 'white' }}>{meaning}</div>
      <div style={{ color: 'white' }}>{type}</div>
    </div>
  )
}
