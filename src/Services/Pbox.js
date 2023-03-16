import React from 'react'
import './Pbox.css'

function Pbox(props) {
    return (
        <div className='p-box-c'>
            <div class="product-box">
                <img src={props.image}/>
                    <h2>{props.name}</h2>
                    <p>{props.p}</p>
            </div>
        </div>
    )
}

export default Pbox