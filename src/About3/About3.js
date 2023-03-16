import React from 'react'
import './About3.css'
import Paragraphs from '../About2/Paragraphs'

function About3() {
    return (
        <div className='About3-container'>
            <div>
                <img className='about3-img' src="/img/student.jpg" />
            </div>
            <div>
                <h1>Dolore culpa ullamco eiusmod</h1>
                <p>Aute ullamco laborum dolor commodo Irure voluptate ad in adipisicing do veniam mollit amet adipisicing est irure quis.</p>
                <div className='a-i-c-1000'>
                    <div>
                        <Paragraphs image={'/img/icons8-done-20.png'} h4={'69'} p={'Ea velit reprehenderit pariatur cupidatat'} />
                        <Paragraphs image={'/img/icons8-facebook-like-32.png'} h4={'21'} p={'Ea velit reprehenderit pariatur '} />
                    </div>
                    <div>
                        <Paragraphs image={'/img/icons8-done-20.png'} h4={'69'} p={'Ea velit reprehenderit pariatur cupidatat'} />
                        <Paragraphs image={'/img/icons8-facebook-like-32.png'} h4={'21'} p={'Ea velit reprehenderit pariatur '} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About3