import React,{useState} from 'react'
import PropTypes from 'prop-types'








export default function Textform(props) {

  const handleUpClick=() =>{
    console.log("upper case button was clicked" + text);
    let newText=text.toUpperCase();
    setTest(newText);
    props.showAlert("Converted to Upper Case","Success");
  }
  const handleLoClick=() =>{
    console.log("upper case button was clicked" + text);
    let newText=text.toLocaleLowerCase();
    setTest(newText);
    props.showAlert("Converted to Lower Case","Success");
  }

    const handleToClear=() =>{
    console.log("upper case button was clicked" + text);
    let newText="";
    setTest(newText);
  }

    const handleonchnage=(event) =>{
    setTest(event.target.value);
  }








  const [text,setTest] = useState('');

  return (
    <>
    <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 > {props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
        </label>

        <textarea
          className="form-control"
          value={text}
          onChange={handleonchnage}
          id="myBox"
          rows="8"
          style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode=='dark'?'white':'black'}} 
          ></textarea>
      </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={handleToClear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p> {text.split(" ").length} and {text.length} Characters</p>
      <p> {0.008* text.split(" ").length } Minus read time </p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Somting in the text box to preview it hear"}</p>

    </div>
    </>
  )
}


