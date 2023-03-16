import React from 'react'
import './Headerbox.css'



function Headerbox(props) {
  return (
    <div className='container-headerbox'>
        <div className='icon-box'>
            <img src={props.icon} alt="icon" />
            <h3>{props.title}</h3>
        </div>           
    </div>
  )
}

export default Headerbox