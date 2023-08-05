import { Rating } from '@mui/material'

export const StarRating = ({ onStarRating }) => {
  return (
    <Rating
      onChange={(_, rating) => {
        onStarRating(rating)
      }}
    ></Rating>
  )
}
