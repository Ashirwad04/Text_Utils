import Navbar from './componenets/Navbar';
import './App.css';
import Textform from './componenets/Textform';
import About from './componenets/About';
import React, { useState } from 'react'
import Aleart from './Aleart';

import {
  BrowserRouter as Router,
  Routes,   // ← Switch → Routes
  Route,
  Link
} from "react-router-dom";
function App() {

const [mode, setMode] = useState('light');

const [alert, setAlert] = useState(null);


const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  })
 setTimeout(() => {
  setAlert(null);
 }, 1500);
}




const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');  
    document.body.style.backgroundColor='gray';
    showAlert("Dark Mode has enabled","success");
  } else {
    setMode('light'); 
    document.body.style.backgroundColor='white';
    showAlert("Light Mode has enabled","success");
  }
}

 return (
  <>
    <Router>
      <Navbar title="Text Utils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Aleart aleart={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={
            <Textform showAlert={showAlert} heading="Enter the test to Analyze Below" mode={mode} />
          } />
        </Routes>
      </div>
    </Router>
  </>
);
}

export default App;
