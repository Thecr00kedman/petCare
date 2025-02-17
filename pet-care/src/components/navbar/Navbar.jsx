import React from 'react'
import Logo from '../../assets/logo2.png'

const Navbar = () => {
  return (
    <div className='relative'>
      <div className='flex flex-row justify-between items-center px-2 py-2 fixed top-0 w-full bg-white shadow-md z-50'>
      <div className='h-16 w-36'>
  <img className='w-full h-full object-contain' src={Logo} alt="Logo" />
</div>
      <ul className='flex flex-row justify-between gap-5'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Vets</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <button className='px-5 py-2 text-white rounded-full w-36 bg-green-500 mr-4'>Login</button>
    </div>
    </div>
  )
}

export default Navbar
