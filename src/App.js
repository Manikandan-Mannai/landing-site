import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Aminities from './components/Aminities'
import StreetViewData from './components/StreetView'
import Timeline from './components/TimeLine'
import FAQ from './components/FAQ'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Aminities />
      <StreetViewData />
      <Timeline />
      <FAQ />
    </div>
  )
}

export default App