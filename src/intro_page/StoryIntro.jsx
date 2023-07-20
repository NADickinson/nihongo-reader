import React from 'react'
import { introStoryArray, introStoryFinal } from '../data/data.mjs'
import { Word } from './Word.jsx'
import { useState } from 'react'
import { WordInfo } from './WordInfo.jsx'

export const StoryIntro = () => {
  const [highlightedWordIndex, setHighLightedWordIndex] = useState('')
  console.log(highlightedWordIndex)
  const myArr = introStoryFinal.map((obj, i) => {
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
