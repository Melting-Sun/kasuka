import React from 'react'
import './Paragraphs.css'


function Paragraphs(props) {
  return (
    <div className='pr-container'>
        <img src={props.image} />
        <div className='a-p-container'>
           
            <h4>{props.h4}</h4>
            <p>{props.p}</p>
        </div>
        
    </div>
  )
}

export default Paragraphs