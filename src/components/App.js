
import React from "react";
import './../styles/App.css';
import {Routes,Route} from 'react-router-dom';

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
