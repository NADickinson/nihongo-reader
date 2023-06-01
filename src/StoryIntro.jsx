import React from 'react'
import { introStoryFinal } from './data.mjs'

export const StoryIntro = () => {
  const myArr = introStoryFinal.map((obj, i) => {
    return (
      <div key={i} style={{ flexShrink: '0' }}>
        {obj.word}
      </div>
    )
  })

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1000px' }}>
      {myArr}
    </div>
  )
}
