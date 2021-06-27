import React from 'react'
import  './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import svr from './images/svr.jpg'
import {NavLink} from 'react-router-dom'
import App from '../App.js'

function Navbar(props) {

    const {navToggle,setNavToggle} = props
    
    return (
        <div className='navbar'>
        

            <nav className='nav'>

            <div className='profile '>
                 <img src={svr} className='img-circle responsive svr' alt='svr' />
            </div>


                <ul className='nav-items'>

                    <li className='nav-item'>
                        <NavLink className='a text-white' to='/' onClick = {() => {props.setNavToggle(!props.navToggle)}} >Home </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='a text-white' to='/about' onClick = {() => {props.setNavToggle(!props.navToggle)}} >About </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='a text-white' to='/portfolio' onClick = {() => {props.setNavToggle(!props.navToggle)}} >Portfolio </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='a text-white' to='/contact' onClick = {() => {props.setNavToggle(!props.navToggle)}} >Contact </NavLink>
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
