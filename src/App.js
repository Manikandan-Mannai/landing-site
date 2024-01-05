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
import Marquee from './components/Marquee'
import CardCarousel from './components/CardCarousel'
import UnevenGrid from './components/UnevenGrid'


const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Amenities />
      <StreetViewData />
      <Timeline />
      <Floor />
      <Marquee/>
      <CardCarousel/>
      <Location />
      <UnevenGrid/>
      <FAQ />
      <Footer/>
    </div>
  )
}

export default App