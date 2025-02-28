import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {
    CalendarCheck,
    CreditCard,
    LayoutDashboard,
    LogOut,
    MessageCircleWarning,
    Settings,
    User
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import profile from "../../assets/testimonial1.jpg";

import usePost from "../../customHooks/usePost";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Cookies from 'js-cookie';

const ProfileWrapper = () => {
    const {setIsLoggedIn,user}=useContext(AuthContext)
    console.log(user,'line 27')
    const navigate=useNavigate()
    const URL=import.meta.env.VITE_BACKEND_URL
    const {postData,loading,error}=usePost(`${URL}/user/user-logout`)
  const handleLogout=async()=>{
     const response=await postData()
     if(response){
        console.log(response,'line 30')
        setIsLoggedIn(false)
        Cookies.remove('userInfo')
        navigate('/login')

     }
  }
  return (
    <div className="flex flex-row w-full">
      <div className="flex gap-6 flex-row py-4 rounded-md w-11/12 mx-auto my-5 relative">
        <div className="w-2/12 border-r-2 border-blue-100 shadow-lg h-[500px]">
          <div className="flex flex-row items-center gap-4 border-b-2 border-black px-2 py-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={profile} alt="text" />
            </div>
            <div>Hey, {user?.name}!</div>
          </div>
          <div className="flex flex-col py-4 gap-[0.5px]">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-white bg-[#5271ff] font-bold flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#28387d] cursor-pointer" : "flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#304394] cursor-pointer"
              }
            >
              <LayoutDashboard />
              Dashboard
            </NavLink>
            <NavLink
              to="/my-profile"
              className={({ isActive }) =>
                isActive ? "text-white bg-[#5271ff] font-bold flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#28387d] cursor-pointer" : "flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#304394] cursor-pointer"
              }
            >
              <User />
              My Profile
            </NavLink>
            <NavLink
              to="/appointments"
              className={({ isActive }) =>
                isActive ? "text-white bg-[#5271ff] font-bold flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#28387d] cursor-pointer" : "flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#304394] cursor-pointer"
              }
            >
              <CalendarCheck />
              Appointments
            </NavLink>
            <NavLink
              to="/payments"
              className={({ isActive }) =>
                isActive ? "text-white bg-[#5271ff] font-bold flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#28387d] cursor-pointer" : "flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#304394] cursor-pointer"
              }
            >
              <CreditCard /> Payments
            </NavLink>
            <NavLink
              to="/complaints"
              className={({ isActive }) =>
                isActive ? "text-white bg-[#5271ff] font-bold flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#28387d] cursor-pointer" : "flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#304394] cursor-pointer"
              }
            >
              <MessageCircleWarning />
              Complaints
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "text-white bg-[#5271ff] font-bold flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#28387d] cursor-pointer" : "flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#304394] cursor-pointer"
              }
            >
              <Settings />
              Settings
            </NavLink>

            {/* ✅ Fixed Logout Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer w-full">
                  <LogOut />
                  Logout
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className='flex flex-col gap-5'>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <div className="flex w-full flex-row gap-3 items-center">
                    <Button className='w-3/12 hover:bg-[#1a5c32] bg-green-700' onClick={()=>handleLogout()}>Yes</Button>
                    <Button className='w-3/12 hover:bg-[#7c1b1b] bg-red-700'>Cancel</Button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="w-10/12 shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileWrapper;
