import { Link } from 'react-router-dom'
import { PageWrapper } from '../components/PageWrapper'
import { HomePageHeader } from './HomePageHeader'

export const HomePage = () => {
  return (
    <PageWrapper>
      <HomePageHeader />
      <Link to={'/intro'}>{'intro'}</Link>
    </PageWrapper>
  )
}
