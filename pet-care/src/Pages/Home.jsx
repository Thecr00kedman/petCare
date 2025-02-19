import React from 'react'

import Hero from '../components/heroSection/Hero'
import Services from '../components/ourServices/Services'
import Cta from '../components/cta/Cta'
import DoctorsSlider from '../components/sliders/DoctorsSlider'
import Work from '../components/workProcess/Work'
import Faq from '../components/faqs/Faq'
import Testimonials from '../components/sliders/Testimonials'
import Counter from '../components/countUp/Counter'
import Blogs from '../components/blogs/Blogs'

const Home = () => {
  return (
    <div className='flex-col'>
       
       <Hero/>
       <Services/>
       <Cta/>
       <DoctorsSlider/>
       <Counter/>
       <Work/>
       <Faq/>
       <Testimonials/>
       <Blogs/>
      
    </div>
  )
}

export default Home
