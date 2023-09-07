import { ProverbStoryFinal, introStoryFinal } from '../data/data.mjs'

const storiesById = {
  1: {
    story: introStoryFinal,
    description:
      'This is an intro about the author (Nathan), detailing his passions and goals in his life, I hope you enjoy!',
  },
  2: {
    story: ProverbStoryFinal,
    description: 'This is a list of some grear Japanese proverbs! enjoy!',
  },
}

export const getStory = (id) => {
  return storiesById[id]
}
