import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
const Navwrapper = ({children}) => {
  return (
    <div>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Navwrapper
