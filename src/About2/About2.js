import React from 'react'
import './About2.css'
import Paragraphs from './Paragraphs'


function About2() {
  return (
    <div className='about2-container'>

        <div>
            <img className='about2-img' src="/img/computer-keyboard-2.jpg" />
        </div>


        <div>
        <Paragraphs image={'/img/icons8-done-20.png'} h4={'Exercitation nisi commodo est ea et.'} p={'Ea velit reprehenderit pariatur cupidatat officia consectetur ad enim ullamco.'}/>
        <Paragraphs image={'/img/icons8-facebook-like-32.png'} h4={'Exercitation nisi commodo est ea et.'} p={'Ea velit reprehenderit pariatur cupidatat officia consectetur ad enim ullamco.'}/>
        <Paragraphs image={'/img/icons8-favorite-32.png'} h4={'Exercitation nisi commodo est ea et.'} p={'Ea velit reprehenderit pariatur cupidatat officia consectetur ad enim ullamco.'}/>
        <Paragraphs image={'/img/icons8-comments-32.png'} h4={'Exercitation nisi commodo est ea et.'} p={'Ea velit reprehenderit pariatur cupidatat officia consectetur ad enim ullamco.'}/>
        </div>
        
    
        
    
    </div>
    
  )
}

export default About2