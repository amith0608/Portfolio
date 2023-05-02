import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgP from '../components/HeroImgP'
import Work from '../components/Work'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgP heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <Footer/>
      </div>
  )
}

export default Project