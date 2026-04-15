import React from 'react'

function Aleart(props) {
  return (
    <div>
      {props.aleart && 
        <div className={`alert alert-${props.aleart.type} alert-dismissible fade show`} role="alert">
          <strong>{props.aleart.type}</strong> {props.aleart.msg}
        
        </div>
      }
    </div>
  )
}

export default Aleart;