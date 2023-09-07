import { ProverbStoryFinal, introStoryFinal } from '../data/data.mjs'

const storiesById = {
  1: introStoryFinal,
  2: ProverbStoryFinal,
}

export const getStory = (id) => {
  return storiesById[id]
}
