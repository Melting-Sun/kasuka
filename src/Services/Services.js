import React from 'react'
import './Services.css'
import Pbox from './Pbox'

function Services() {
    return (
        <div className='s-container'>
            <div>
                <p>Veniam</p>
                <h2>Qui esse commodo commodo dolor.</h2>
            </div>



            <div className='f-i-c'>
                <div className='services-images-container1'>
                    <Pbox image={'/img/icons8-telegram-app-100.png'} name={'Lorem pariatur aliqua esse'} p={'Exercitation elit culpa voluptate ullamco do sit ipsum culpa duis irure minim ea.'} />
                    <Pbox image={'/img/icons8-facebook-100.png'} name={'Lorem pariatur aliqua esse'} p={'Exercitation elit culpa voluptate ullamco do sit ipsum culpa duis irure minim ea.'} />
                    <Pbox image={'/img/icons8-instagram-100.png'} name={'Lorem pariatur aliqua esse'} p={'Exercitation elit culpa voluptate ullamco do sit ipsum culpa duis irure minim ea.'} />

                </div>

                <div className='services-images-container2'>
                    <Pbox image={'/img/icons8-pinterest-100.png'} name={'Lorem pariatur aliqua esse'} p={'Exercitation elit culpa voluptate ullamco do sit ipsum culpa duis irure minim ea.'} />
                    <Pbox image={'/img/icons8-twitter-100.png'} name={'Lorem pariatur aliqua esse'} p={'Exercitation elit culpa voluptate ullamco do sit ipsum culpa duis irure minim ea.'} />
                    <Pbox image={'/img/icons8-youtube-100.png'} name={'Lorem pariatur aliqua esse'} p={'Exercitation elit culpa voluptate ullamco do sit ipsum culpa duis irure minim ea.'} />
                </div>
            </div>



        </div>
    )
}

export default Services