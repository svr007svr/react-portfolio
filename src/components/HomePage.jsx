import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 

import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './Homapage.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function HomePage() {
    return (
        <div className='homepage'>
            <header classNmae='hero'>
                <h1 className='hero-text'>
                    Hi, I am 
                    <span className='span'>SUNIL RATHOD</span></h1>

                    <p className='h-sub-text'> When tags like <font/>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process. </p>
                    
                    <div className='icons'>
                        <Link className='icon-holder'>
                            <FontAwesomeIcon className='icon fb' icon={faFacebook}/>
                        </Link>
                        <Link className='icon-holder'>
                            <FontAwesomeIcon className='icon ig' icon={faInstagram}/>
                        </Link>
                        <Link className='icon-holder'>
                            <FontAwesomeIcon className='icon gh' icon={faGithub}/>
                        </Link>
                    </div>
                
            </header>
        </div>              
    )
}

export default HomePage
