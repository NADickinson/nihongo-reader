import { Link } from 'react-router-dom'
import { PageWrapper } from '../components/PageWrapper'

export const HomePage = () => {
  return (
    <PageWrapper>
      <Link to={'/intro'}>{'intro'}</Link>
    </PageWrapper>
  )
}
