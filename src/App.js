import React from "react";
import "./index.css"
import Home from "./routes/Home"
import Project from "./routes/Project"
import About from "./routes/About"
import { Route, Routes } from "react-router-dom";
import Experience from "./components/Experience";


function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/about" element={<About/>}/>
      

    </Routes>
    </>
  );
}

export default App;
