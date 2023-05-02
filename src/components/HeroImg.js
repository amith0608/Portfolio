import "./HeroImgStyles.css";
import React from 'react'
import introImg from "../assests/p1.jpeg"; 
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="Hero">
        <div className="mask">
            <img className="intro-img" src={introImg} alt="Image"/>
        </div>
        <div className="content">
            <h1>Amith B N</h1>
            <h1>MERN Developer</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
               
            </div>
        </div>
    </div>
  )
}

export default HeroImg