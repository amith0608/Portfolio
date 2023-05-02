import "./HeroImgPStyles.css";
import React, { Component } from 'react'
import projImg from "../assests/p3.jpeg"; 


class HeroImgP extends Component  {
    render(){

    
  return (
    <div className="hero-img">
         
       
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            
        </div>
       
    </div>
  )
}
}
export default HeroImgP