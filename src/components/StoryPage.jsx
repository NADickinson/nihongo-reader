import { Column } from '../components/Column'
import { PageHeader } from '../components/PageHeader'
import { PageWrapper } from '../components/PageWrapper'
import { ColourChart } from '../components/ColourChart'
import { SideBar } from '../components/SideBar'
import { useState } from 'react'
import { Story } from '../components/story'
import { useParams } from 'react-router-dom'
import { getStory } from '../Api/getStory'

export const StoryPage = () => {
  const [hasClicked, setHasClicked] = useState(false)
  const storyId = useParams().storyId
  const { story, description } = getStory(storyId)

  return (
    <PageWrapper>
      <PageHeader aboutDescription={description} />
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
        <Story story={story} />
      </Column>
    </PageWrapper>
  )
}
