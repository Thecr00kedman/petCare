import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import {useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {PacmanLoader} from 'react-spinners'

useLocation
const Navwrapper = ({children}) => {
  const[loading,setLoading]=useState(true)
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timeout);
  }, [location?.pathname]);
  
  return (
    <div>
      <Navbar/>
      {loading?(<main className='flex justify-center items-center w-full h-[60vh]'>
        <PacmanLoader color='#22c55e'/>
      </main>):(<main>
        {children}
      </main>)}
      <Footer/>
    </div>
  )
}

export default Navwrapper
