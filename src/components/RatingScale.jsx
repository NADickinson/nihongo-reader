import { StarRating } from './StarRating'

export const RatingScale = ({ text, onStarRating }) => {
  return (
    <div style={{ position: 'absolute' }}>
      <StarRating onStarRating={onStarRating} />
    </div>
  )
}
