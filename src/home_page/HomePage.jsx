import { Link } from 'react-router-dom'
import { PageWrapper } from '../components/PageWrapper'
import { HomePageHeader } from './HomePageHeader'
import { Row } from '../components/Row'
import { getAllStories } from '../Api/getAllStories'

export const HomePage = () => {
  const retreivedStories = getAllStories()

  return (
    <PageWrapper>
      <HomePageHeader />

      <Row align={'center'} justify={'center'}>
        {retreivedStories.map((story) => {
          return (
            <Link
              to={`/Stories/${story.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px',
                    fontSize: '1.5rem',
                  }}
                >
                  {story.name}
                </div>
                <img
                  style={{ maxWidth: '600px', padding: '30px' }}
                  src={story.imgSrc}
                  alt=""
                />
              </div>
            </Link>
          )
        })}
      </Row>
    </PageWrapper>
  )
}
