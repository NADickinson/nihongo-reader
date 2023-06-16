import React from 'react'
import { introStoryFinal } from './data.mjs'
import { Word } from './Word.jsx'
import { useState } from 'react'

export const StoryIntro = () => {
  const [highlightedWordId, setHighLightedWordId] = useState('')
  console.log(highlightedWordId)
  const myArr = introStoryFinal.map((obj, i) => {
    return (
      <Word
        highlightedWordID={highlightedWordId}
        wordId={obj.id}
        wordType={obj.type}
        word={obj.word}
        onSelectWord={() => {
          setHighLightedWordId(obj.id)
        }}
        key={i}
      />
    )
  })

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1000px' }}>
      {myArr}
    </div>
  )
}
