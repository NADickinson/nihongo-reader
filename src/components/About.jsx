import { CrossIcon } from '../theme/Icons'
import { redColor } from '../theme/theme'
export const About = ({ text, deselect }) => {
  return (
    <div
      style={{
        backgroundColor: '#18344E',
        border: '1px solid #B5ADB7',
        borderRadius: '0.5rem',
        color: 'white',
        maxWidth: '300px',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        top: '100px',
      }}
    >
      <div>{text}</div>
      <div
        onClick={() => {
          deselect()
        }}
      >
        <CrossIcon color={redColor} size={'24px'} />
      </div>
    </div>
  )
}
