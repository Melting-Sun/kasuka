import React from 'react'
import './Navbar.css'



function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <div className="navbar-left">
                    <img className='logo-image' src="/img/kasuka-logo.png" alt="kasuka" />
                    <h1>KASUKA</h1>
                </div>
                <div className='ul-li-container-110'>
                    <ul className='list'>
                        <li className='ul-li-se-1'> Home </li>
                        <li> About  </li>
                        <li> Services  </li>
                        <li> Product  </li>
                        <li> Team  </li>
                    </ul>
                </div>

                <div className='navbar-right'>
                    <button>Start</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar