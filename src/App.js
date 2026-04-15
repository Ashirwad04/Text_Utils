import Navbar from './componenets/Navbar';
import './App.css';
import Textform from './componenets/Textform';
import About from './componenets/About';
import React, { useState } from 'react'
import Aleart from './Aleart';

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
    
<Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}  />

    <Aleart aleart={alert}/>


  <div className="container my-3">
    <Textform showAlert={showAlert} heading="Enter the test to Analyze Below" mode={mode}/>
    {/* <About/> */}
  </div>
   </>
  );
}

export default App;
