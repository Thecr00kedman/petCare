import React from "react";
import profile from "../../assets/testimonial1.jpg";
import { Outlet, Link } from "react-router-dom";
import { 
    LayoutDashboard, 
    CalendarCheck, 
    CreditCard, 
    MessageCircleWarning, 
    Settings, 
    LogOut 
} from "lucide-react";

const ProfileWrapper = () => {
  return (
    // <div className="flex flex-row w-full">
    //   <div className="flex gap-6 flex-row py-4 rounded-md w-11/12 mx-auto my-5">
    //     {/* Sidebar */}
    //     <div className="w-2/12 border-r-2 border-blue-100 shadow-lg">
    //       <div className="flex flex-row items-center gap-4 border-b-2 border-black px-2 py-4">
    //         <div className="w-10 h-10 rounded-full overflow-hidden">
    //           <img src={profile} alt="profile" />
    //         </div>
    //         <div>Hey, Aditya!</div>
    //       </div>
    //       <ul className="flex flex-col py-4">
    //         <Link to="/dashboard" className="sidebar-item">
    //           <LayoutDashboard /> Dashboard
    //         </Link>
    //         <Link to="/appointments" className="sidebar-item">
    //           <CalendarCheck /> Appointments
    //         </Link>
    //         <Link to="/payments" className="sidebar-item">
    //           <CreditCard /> Payments
    //         </Link>
    //         <Link to="/complaints" className="sidebar-item">
    //           <MessageCircleWarning /> Complaints
    //         </Link>
    //         <Link to="/settings" className="sidebar-item">
    //           <Settings /> Settings
    //         </Link>
    //         <Link to="/logout" className="sidebar-item">
    //           <LogOut /> Logout
    //         </Link>
    //       </ul>
    //     </div>

    //     {/* Page Content */}
    //     <div className="w-10/12 shadow-lg">
    //       <div>
    //         <Outlet /> {/* This will load the respective page here */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='flex flex-row w-full'>
      <div className='flex gap-6 flex-row py-4 rounded-md w-11/12 mx-auto my-5 relative'>
      <div className='w-2/12 border-r-2 border-blue-100 shadow-lg h-[500px]'>
        <div className='flex flex-row items-center gap-4 border-b-2 border-black px-2 py-4'>
           <div className='w-10 h-10 rounded-full overflow-hidden'>
            <img src={profile} alt="text" />
           </div>
           <div>Hey, Aditya!</div>
        </div>
        <ul className='flex flex-col py-4'>
            <Link to="/dashboard"className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><LayoutDashboard />Dashboard</Link>
            <Link to="/appointments"className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><CalendarCheck />Appointments</Link>
            <Link to="/payments"className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><CreditCard/> Payments</Link>
            <Link to="/complaints"className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><MessageCircleWarning />Complaints</Link>
            <Link to="/settings"className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><Settings/>Settings</Link>
            <Link className='flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer'><LogOut/>Logout</Link>
        </ul>
      </div>
      <div className='w-10/12 shadow-lg'>
      <Outlet/>
      </div>
      </div>
      
    </div>
  );
};

export default ProfileWrapper;
