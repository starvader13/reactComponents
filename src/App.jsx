import React, { useState } from 'react'
import './App.css'
import Accordion from "./components/accordion/Accordion.jsx";
import RandomColor from "./components/randomColor/RandomColor.jsx";

function App() {
  return <React.Fragment>
      <div>
          {/* Accordion Component */}
          <Accordion />

          {/* Random Color Component */}
          <RandomColor />
      </div>
  </React.Fragment>
}

export default App
