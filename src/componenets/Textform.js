import React,{useState} from 'react'
import PropTypes from 'prop-types'








export default function Textform(props) {

  const handleUpClick=() =>{
    console.log("upper case button was clicked" + text);
    let newText=text.toUpperCase();
    setTest(newText);
  }

    const handleonchnage=(event) =>{
    setTest(event.target.value);
  }








  const [text,setTest] = useState('Enter text hear');

  return (
    <div>
      <h1> {props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
         
        </label>

        <textarea
          className="form-control"
          value={text}
          onChange={handleonchnage}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}


