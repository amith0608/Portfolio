import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgP from '../components/HeroImgP'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgP heading="Contact" text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact