export const ColourChart = ({ height, width, padding }) => {
  return (
    <div
      style={{
        backgroundColor: '#18344E',
        color: 'white',
        borderRadius: '0.5rem',
        border: '1px solid #B5ADB7',
        minWidth: '100px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div id={'Set phrase'} style={{ padding: padding }}>
        <div
          style={{
            backgroundColor: 'red',
            height: height,
            width: width,
          }}
        ></div>
        {'Set phrase'}
      </div>
      <div id={'Grammar'} style={{ padding: padding }}>
        <div
          style={{
            backgroundColor: 'blue',
            height: height,
            width: width,
          }}
        ></div>
        {'Grammar'}
      </div>
      <div id={'Noun'} style={{ padding: padding }}>
        <div
          style={{
            backgroundColor: 'green',
            height: height,
            width: width,
          }}
        ></div>
        {'Noun'}
      </div>
      <div id={'Adverb'} style={{ padding: padding }}>
        <div
          style={{ backgroundColor: 'orange', height: height, width: width }}
        ></div>
        {'Adverb'}
      </div>
      <div id={'Adjective'} style={{ padding: padding }}>
        <div
          style={{ backgroundColor: 'purple', height: height, width: width }}
        ></div>
        {'Adjective'}
      </div>
      <div id={'Verb'} style={{ padding: padding }}>
        <div
          style={{ backgroundColor: 'hotpink', height: height, width: width }}
        ></div>
        {'Verb'}
      </div>
    </div>
  )
}
