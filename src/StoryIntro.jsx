import React from 'react'
import { introStoryArray } from './data.mjs'

export const StoryIntro = ({ word }) => {
  const myArr = introStoryArray.map((obj) => {
    return <div style={{ flexShrink: '0' }}>{obj.word}</div>
  })

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1000px' }}>
      {myArr}
    </div>
  )
}
