import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgP from '../components/HeroImgP'
import AboutContent from '../components/AboutContent'


const About = () => {
  return (
    <div>
      
      <Navbar/>
      <HeroImgP heading="About"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About