import { PageWrapper } from '../components/PageWrapper'
import { PageHeader } from '../components/PageHeader'
import { Column } from '../components/Column'
import { SideBar } from '../components/SideBar'
import { useState } from 'react'
import { ColourChart } from '../components/ColourChart'
import { StoryProverbs } from './storyProverbs'
import { Story } from '../components/story'
import { ProverbStoryFinal } from '../data/data.mjs'

export const ProverbsPage = () => {
  const [hasClicked, setHasClicked] = useState(false)
  return (
    <PageWrapper>
      <PageHeader
        aboutDescription={
          'This is a list of some grear Japanese proverbs! enjoy!'
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
        <Story story={ProverbStoryFinal} />
      </Column>
    </PageWrapper>
  )
}
// TODO: ADD WHITE SPACE INTO ARRAYS FOR SPACING
