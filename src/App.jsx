import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { IntroPage } from './intro_page/IntroPage'
import { HomePage } from './home_page/HomePage'
import { ProverbsPage } from './proverbs_page/ProversPage'
import { introStoryFinal, ProverbStoryFinal } from './data/data.mjs'
import { Story } from './components/story'
import { StoryPage } from './components/StoryPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={'error 404'} />
        <Route path="/Stories/:storyId" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
