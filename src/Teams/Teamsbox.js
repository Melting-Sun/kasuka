import React from 'react'
import './Teamsbox.css'



function Teamsbox(props) {
    return (
        <div className='teams-container'>
            <div>
                <img className='teams-img' src={props.image} />
                <div className='image-footer-container'>
                    <h2>{props.name}</h2>
                    <p>{props.role}</p>
                </div>
            </div>
        </div>
    )
}

export default Teamsbox