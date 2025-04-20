
import React from "react";
import './../styles/App.css';
import {Routes,Route} from 'react-router-dom';
import List from  './List';
import Home from "./Home";
import About from "./About";


const App = () => {
  return (
    <div>
      <List/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
