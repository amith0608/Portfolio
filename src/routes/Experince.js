import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgP from '../components/HeroImgP'
import Experience from '../components/Experience'


const About = () => {
  return (
    <div>
      
      <Navbar/>
      <HeroImgP heading="About"/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default About