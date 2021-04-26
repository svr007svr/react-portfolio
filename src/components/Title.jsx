import React from 'react'
import './Title.css'

function Title({title,span}) {
    return (
        <div className='title'>
            <h3>
                {title}
                <span className='span1'>{span}</span>
            </h3>
        </div>
    )
}

export default Title 
