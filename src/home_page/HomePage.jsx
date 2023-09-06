import { Link } from 'react-router-dom'
import { PageWrapper } from '../components/PageWrapper'
import { HomePageHeader } from './HomePageHeader'
import { Row } from '../components/Row'

export const HomePage = () => {
  return (
    <PageWrapper>
      <HomePageHeader />

      <Row align={'center'} justify={'center'}>
        <Link to={'/Stories/intro'} style={{ textDecoration: 'none' }}>
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
        <Link to={'/Stories/proverbs'} style={{ textDecoration: 'none' }}>
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
              style={{ maxWidth: '600px', padding: '40px' }}
              src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
              alt=""
            />
          </div>
        </Link>
      </Row>
    </PageWrapper>
  )
}
