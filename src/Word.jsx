export const Word = ({
  word,
  onSelectWord,
  wordType,
  wordId,
  highlightedWordID,
}) => {
  let color = ''
  if (wordId !== highlightedWordID) {
    color = ''
  } else if (wordType === 'Set phrase') {
    color = 'red'
  } else if (wordType === 'Grammar') {
    color = 'blue'
  } else if (wordType === 'Noun') {
    color = 'green'
  } else if (wordType === 'Adverb') {
    color = 'yellow'
  } else if (wordType === 'Adjective') {
    color = 'purple'
  } else if (wordType === 'Verb') {
    color = 'hotpink'
  }
  return (
    <div style={{ background: color }} onClick={onSelectWord}>
      {word}
    </div>
  )
}
