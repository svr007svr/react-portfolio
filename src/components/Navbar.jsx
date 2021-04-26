import React from 'react'
import  './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import svr from './images/svr.jpg'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
        

            <nav className='nav'>

            <div className='profile '>
                 <img src={svr} className='img-circle responsive svr' alt='svr' />
            </div>


                <ul className='nav-items'>

                    <li className='nav-item'>
                        <NavLink className='a text-white' to='/' >Home </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='a text-white' to='/about' >About </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='a text-white' to='/portfolio' >Portfolio </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='a text-white' to='/contact' >Contact </NavLink>
                    </li>

                </ul>
            </nav>


            <footer className='footer'>
                <p>
                   <span className='text-center'> @2021 SUNIL RATHOD</span>
                </p>
            </footer>
            
        </div>
    )
}

export default Navbar
