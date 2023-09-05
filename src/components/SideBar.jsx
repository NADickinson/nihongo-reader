import { redColor } from '../theme/theme'
import { ArrowIcon } from '../theme/Icons'

export const SideBar = ({ children, height, width, right, stateSetter }) => {
  return (
    <div
      style={{
        position: 'absolute',
        transition: 'right 1500ms',
        right: right,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: height,
        width: width,
      }}
    >
      <div
        style={{
          height: height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          onClick={() => {
            stateSetter()
          }}
          style={{
            backgroundColor: redColor,
            height: '50px',
            width: '30px',
            borderRadius: '0.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <ArrowIcon />
        </div>
      </div>
      {children}
    </div>
  )
}
