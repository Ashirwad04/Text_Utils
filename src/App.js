import Navbar from './componenets/Navbar';
import './App.css';
import Textform from './componenets/Textform';
import About from './componenets/About';
import React, { useState } from 'react'

function App() {

  const [mode, setMode] = useState('light');

const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');  
    document.body.style.backgroundColor='gray';
  } else {
    setMode('light'); 
    document.body.style.backgroundColor='white';
  }
}

  return (
   <>
    
<Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}  />

  <div className="container my-3">
    <Textform heading="Enter the test to Analyze Below" mode={mode}/>
    {/* <About/> */}
  </div>
   </>
  );
}

export default App;
