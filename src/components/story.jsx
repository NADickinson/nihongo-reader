import { useState } from 'react'
import { Word } from './Word'

export const Story = ({ story }) => {
  const [highlightedWordIndex, setHighLightedWordIndex] = useState('')

  const myArr = story.map((obj, i) => {
    return (
      <Word
        deselect={() => {
          setHighLightedWordIndex(undefined)
        }}
        isSelected={highlightedWordIndex === i}
        fullWordObject={obj}
        key={i}
        onSelectWord={() => {
          setHighLightedWordIndex(i)
        }}
      />
    )
  })

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1000px',
        rowGap: '1rem',
      }}
    >
      {myArr}
    </div>
  )
}
