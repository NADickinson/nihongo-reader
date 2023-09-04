import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IntroPage } from './intro_page/IntroPage'
import { HomePage } from './home_page/HomePage'
import { ProverbsPage } from './proverbs_page/ProversPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="*" element={'error 404'} />
        <Route path="/Proverbs" element={<ProverbsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
