import { Column } from '../components/Column'
import { PageHeader } from './PageHeader'
import { StoryIntro } from './StoryIntro'
import { PageWrapper } from '../components/PageWrapper'

export const IntroPage = () => {
  return (
    <PageWrapper>
      <PageHeader />
      <Column justify="center" align="center" flexGrow="1">
        <StoryIntro />
      </Column>
    </PageWrapper>
  )
}
