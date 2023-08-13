import { redColor } from '../theme/theme'

export const HomePageHeader = (props) => {
  return (
    <div
      style={{
        height: '100px',
        backgroundColor: redColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ color: 'white', fontSize: '2rem' }}>{'Welcome!'}</div>
      {props.children}
    </div>
  )
}
