import { Column } from '../components/Column'
import { PageHeader } from './PageHeader'
import { StoryIntro } from './StoryIntro'
import { PageWrapper } from '../components/PageWrapper'
import { ColourChart } from '../components/ColourChart'
import { SideBar } from '../components/SideBar'
import { useState } from 'react'

export const IntroPage = () => {
  const [hasClicked, setHasClicked] = useState(false)
  return (
    <PageWrapper>
      <PageHeader />
      <Column justify="center" align="center" flexGrow="1">
        <SideBar
          height={'321px'}
          right={hasClicked ? '0px' : '-102px'}
          stateSetter={() => {
            setHasClicked(!hasClicked)
          }}
        >
          <ColourChart height={'15px'} width={'15px'} padding={'10px'} />
        </SideBar>
        <StoryIntro />
      </Column>
    </PageWrapper>
  )
}
