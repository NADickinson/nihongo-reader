import { Column } from '../components/Column'
import { PageHeader } from '../components/PageHeader'
import { StoryIntro } from './StoryIntro'
import { PageWrapper } from '../components/PageWrapper'
import { ColourChart } from '../components/ColourChart'
import { SideBar } from '../components/SideBar'
import { useState } from 'react'
import { Story } from '../components/story'
import { introStoryFinal } from '../data/data.mjs'

export const IntroPage = () => {
  const [hasClicked, setHasClicked] = useState(false)
  return (
    <PageWrapper>
      <PageHeader
        aboutDescription={
          'This is an intro about the author (Nathan), detailing his passions and goals in his life, I hope you enjoy!'
        }
      />
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
        <Story story={introStoryFinal} />
      </Column>
    </PageWrapper>
  )
}
