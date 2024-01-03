import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Amenities from './components/Amenities'
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
      <Amenities />
      <StreetViewData />
      <Timeline />
      <Floor />
      <Location />
      <FAQ />
      <Footer/>
    </div>
  )
}

export default App