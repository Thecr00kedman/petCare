import React from 'react'
import profile from '../../assets/testimonial1.jpg'
import { 
    LayoutDashboard, 
    CalendarCheck, 
    CreditCard, 
    MessageCircleWarning, 
    Settings, 
    LogOut 
} from "lucide-react";

const UserPanel = () => {
  return (
    <div className='flex flex-row w-full'>
      {/* <div className='flex gap-6 flex-row py-4 rounded-md w-11/12 mx-auto my-5'>
      <div className='w-2/12 border-r-2 border-blue-100 shadow-lg'>
        <div className='flex flex-row items-center gap-4 border-b-2 border-black px-2 py-4'>
           <div className='w-10 h-10 rounded-full overflow-hidden'>
            <img src={profile} alt="text" />
           </div>
           <div>Hey, Aditya!</div>
        </div>
        <ul className='flex flex-col py-4'>
            <li className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><LayoutDashboard />Dashboard</li>
            <li className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><CalendarCheck />Appointments</li>
            <li className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><CreditCard/> Payments</li>
            <li className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><MessageCircleWarning />Complaints</li>
            <li className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><Settings/>Settings</li>
            <li className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><LogOut/>Logout</li>
        </ul>
      </div>
      <div className='w-10/12 shadow-lg'>
        <div>
            The respective pages of the side bar should load here
        </div>
      </div>
      </div> */}
      <h1>This is for testing</h1>
    </div>
  )
}

export default UserPanel
