import React from 'react'

import Hero from '../components/heroSection/hero'
import Services from '../components/ourServices/Services'
import Cta from '../components/cta/Cta'
import DoctorsSlider from '../components/sliders/DoctorsSlider'
import Work from '../components/workProcess/Work'
import Faq from '../components/faqs/Faq'
import Testimonials from '../components/sliders/Testimonials'


const Home = () => {
  return (
    <div className='flex-col'>
       
       <Hero/>
       <Services/>
       <Cta/>
       <DoctorsSlider/>
       <Work/>
       <Faq/>
       <Testimonials/>
      
    </div>
  )
}

export default Home
