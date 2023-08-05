import { redColor } from '../theme/theme'
import { CustomButton } from '../components/CustomButton'
import { useEffect, useState } from 'react'
import { RatingScale } from './RatingScale'
import { Link } from 'react-router-dom'
import { SubmissionMessage } from '../components/SubmissionMessage'
import { About } from '../components/About'

export const PageHeader = (props) => {
  const [hasRated, setHasRated] = useState(false)

  useEffect(() => {
    if (hasRated) {
      setTimeout(() => {
        setHasRated(false)
      }, 3000)
    }
  }, [hasRated])

  const onStarRating = (rating) => {
    if (rating) {
      setHasRated(true)
    }
  }
  const [ratingIsClicked, setRatingIsClicked] = useState(false)
  const [aboutIsClicked, setAboutIsClicked] = useState(false)

  return (
    <div
      style={{
        height: '100px',
        backgroundColor: redColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <div>
        <Link
          style={{
            padding: '5px',
            fontSize: '1.5rem',
            color: 'white',
            textDecoration: 'none',
          }}
          to={'/'}
        >
          {'Home'}
        </Link>
      </div>
      <div style={{ position: 'relative' }}>
        <CustomButton
          text={'Rating'}
          onClick={() => setRatingIsClicked(true)}
        />

        {ratingIsClicked ? (
          <RatingScale onStarRating={onStarRating} />
        ) : undefined}

        <SubmissionMessage opacity={hasRated ? 1 : 0} />
      </div>

      <CustomButton
        text={'About'}
        onClick={() => {
          setAboutIsClicked(true)
        }}
        style={{ position: 'relative' }}
      ></CustomButton>

      {aboutIsClicked ? (
        <About
          text={
            'This is an intro about the author (Nathan), detailing his passions and goals in his life, I hope you enjoy!'
          }
          deselect={() => {
            setAboutIsClicked(false)
          }}
        />
      ) : undefined}

      {props.children}
    </div>
  )
}
