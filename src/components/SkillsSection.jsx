import React from 'react'
import '../css/skills.css'

function SkillsSection({skill,progress,width}) {
    return (
        <div className='skillssection'>
            <div classNmae='skills-container'>
                <h5 className='skill-title'>{skill}</h5>
                    <div className='skill-bar'>
                        <p className='skill-text'>
                        {progress}
                        </p>
                        <div className='skill-progress1'>
                            
                            <div className='progress1'>
                                
                                <div className='inner-progress' style={{width:width}}>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

export default SkillsSection
