import React from 'react'
import Bigtxt from './Bigtxt'
import Navbar from './Navbar'
import './Header.css'
import Headerbox from './Headerbox'


function Header() {
  

  return (
    <div className='parallax' >
        <div className='content'>
            <Navbar/>
            <br />
            <br />
            <Bigtxt/>
            <br />
            <br />
            <br />
            <div className='headerbox-header-1'>
              <Headerbox icon='/img/icons8-database-32.png' title='Databse'/>
              <Headerbox icon='/img/icons8-calendar-32 (1).png' title='Product'/>
              <Headerbox icon='/img/icons8-trash-32.png' title='Howdafck'/>
              <Headerbox icon='/img/icons8-icons8-32.png' title='Quakquak'/>
              <Headerbox icon='/img/icons8-small-icons-32.png' title='Kamalgara'/>
              
            </div>
        </div>
        
    </div>
  )
}

export default Header