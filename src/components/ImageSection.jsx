import React from 'react'
import '../css/ImageSection.css'
import svr from './images/svr.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function ImageSection() {
    return (
        <div className='ImageSection'>
            <div className='image'>
                <img src={svr} className='svr-img'  alt='about me' />
            </div>
            <div className='about-info'>
                <h4>I am<span>SUNIL RATHOD</span></h4>
                <p className='about-text'>
                When tags like <font/>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.
                </p>
                <div className='about-details'>
                    <div className='left-section'>
                        <p>Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        
                        
                    </div>
                    <div className='right-section'>
                        <p>: SUNIL RATHOD</p>
                        <p>: 21</p>
                        <p>: Indian</p>
                        <p>: English,Hindi,Gujarati</p>
                        <p>: Surat,Gujarat</p>    
                            
                    </div>    
                </div>
                <button className='btn'>Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection
