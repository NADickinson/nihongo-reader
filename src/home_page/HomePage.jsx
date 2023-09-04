import { Link } from 'react-router-dom'
import { PageWrapper } from '../components/PageWrapper'
import { HomePageHeader } from './HomePageHeader'
import { Column } from '../components/Column'

export const HomePage = () => {
  return (
    <PageWrapper>
      <HomePageHeader />
      <Column align={'center'}>
        <Link to={'/intro'} style={{ textDecoration: 'none' }}>
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
              {'Introduction!'}
            </div>
            <img
              style={{ maxWidth: '600px', padding: '30px' }}
              src="https://cdn.pixabay.com/photo/2021/03/18/17/09/teacher-6105336_1280.png"
              alt=""
            />
          </div>
        </Link>
        <Link to={'/Proverbs'} style={{ textDecoration: 'none' }}>
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
              {' Japanese Proverbs'}
            </div>
            <img
              style={{ maxWidth: '600px', padding: '30px' }}
              src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
              alt=""
            />
          </div>
        </Link>
      </Column>
    </PageWrapper>
  )
}
//TODO: SCROLL OR NOT TO SCROLL? ALSO FIX DIV ORDERING ABOVE.
