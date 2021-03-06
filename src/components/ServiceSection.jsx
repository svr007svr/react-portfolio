import React from 'react'
import '../css/ServiceSection.css'

function ServiceSection({image,title,text}) {
    return (
        <div className='serviceSection'>
            <div className='service'>
                <div className='service-content'>
                <center><img className='react-img' src={image} alt='svr' />
                <h5 className='s-title'>{title}</h5></center>
                <p className='s-text'>
                    {text}

                </p>
                </div>
            </div>        
        </div>
    )
}

export default ServiceSection 
