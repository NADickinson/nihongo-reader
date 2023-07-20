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
      return 'yellow'
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
  return (
    <div
      style={{
        position: 'relative',
        zIndex: isSelected ? 1 : undefined,
      }}
    >
      <div style={{ color: '#eee', background: color }} onClick={onSelectWord}>
        {word}
      </div>
      {isSelected ? (
        <WordInfo
          deselect={deselect}
          word={fullWordObject.word}
          meaning={fullWordObject.meaning}
          type={fullWordObject.type}
        />
      ) : undefined}
    </div>
  )
}
