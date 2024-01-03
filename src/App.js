import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Aminities from './components/Aminities'
import StreetViewData from './components/StreetView'
import Timeline from './components/TimeLine'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Floor from './components/Floor'
import Location from './components/Location'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Aminities />
      <StreetViewData />
      <Timeline />
      <Floor />
      <Location />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App