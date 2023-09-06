import { WordInfo } from './WordInfo'
//TODO: FIX WORD INFO DESCRIPTION WRAPPING
const getColor = (wordType) => {
  switch (wordType) {
    case 'Set phrase':
      return 'red'
    case 'Grammar':
      return 'blue'
    case 'Noun':
      return 'green'
    case 'Adverb':
      return 'orange'
    case 'Adjective':
      return 'purple'
    case 'Verb':
      return 'hotpink'
    default:
      return ''
  }
}

export const Word = ({
  onSelectWord,
  isSelected,
  fullWordObject,
  deselect,
}) => {
  const { word, type: wordType } = fullWordObject
  const color = isSelected ? getColor(wordType) : undefined
  const isWordFiller = () => {
    if (fullWordObject.word === ':') {
      return undefined
    } else {
      return (
        <WordInfo
          deselect={deselect}
          word={fullWordObject.word}
          reading={fullWordObject.reading}
          meaning={fullWordObject.meaning}
          type={fullWordObject.type}
        />
      )
    }
  }
  return (
    <div
      style={{
        position: 'relative',
        zIndex: isSelected ? 1 : undefined,
        cursor: 'pointer',
      }}
    >
      <div style={{ color: '#eee', background: color }} onClick={onSelectWord}>
        {word}
      </div>
      {isSelected ? isWordFiller() : undefined}
    </div>
  )
}
