import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import PaperDetail from './pages/PaperDetail'
import Benifit from './pages/Benifit'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <PaperDetail />
      <Benifit />
    </div>
  )
}

export default App
