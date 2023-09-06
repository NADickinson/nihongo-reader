import { useState } from 'react'
import { ProverbStoryFinal } from '../data/data.mjs'
import { Word } from '../components/Word'

export const StoryProverbs = () => {
  const [highlightedWordIndex, setHighLightedWordIndex] = useState('')

  const myArr = ProverbStoryFinal.map((obj, i) => {
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
