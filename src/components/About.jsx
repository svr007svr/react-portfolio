import React from 'react'
import Title from './Title'
import ImageSection from './ImageSection'
import SkillsSection from './SkillsSection'
import ServiceSection from './ServiceSection'

import react from './images/react.jpg'


function About() {
    return (
        <div className='aboutpage text-white'>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className='skil-container'>
            <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'}/>
            <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'}/>
            <SkillsSection skill={'CSS'} progress={'75%'} width={'75%'}/>
            <SkillsSection skill={'Bootstrap'} progress={'80%'} width={'80%'}/>
            <SkillsSection skill={'jQuery'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'Ajax'} progress={'50%'} width={'50%'}/>
            <SkillsSection skill={'php Laravel'} progress={'70%'} width={'70%'}/>
            <SkillsSection skill={'TypeScript'} progress={'50%'} width={'50%'}/>
            </div>



            <Title title={'Services'} span={'Services'} />

            <div className='service-container'>
                <ServiceSection 
                text={'When tags like , and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers'} image={react} title={'React Js'}/>
                <ServiceSection 
                text={'When tags like , and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers'} image={react} title={'PHP Laravel'}/>
                <ServiceSection 
                text={'When tags like , and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers'} image={react} title={'web-design'}/>

            </div>


        </div>
    )
}

export default About
