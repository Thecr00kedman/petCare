import React from "react";
import profile from "../../assets/testimonial1.jpg";
import { Outlet, Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Button} from '@/components/ui/button'
import {
  LayoutDashboard,
  CalendarCheck,
  CreditCard,
  MessageCircleWarning,
  Settings,
  LogOut,
  User
} from "lucide-react";

const ProfileWrapper = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex gap-6 flex-row py-4 rounded-md w-11/12 mx-auto my-5 relative">
        <div className="w-2/12 border-r-2 border-blue-100 shadow-lg h-[500px]">
          <div className="flex flex-row items-center gap-4 border-b-2 border-black px-2 py-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={profile} alt="text" />
            </div>
            <div>Hey, Aditya!</div>
          </div>
          <div className="flex flex-col py-4">
            <Link
              to="/dashboard"
              className="flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer"
            >
              <LayoutDashboard />
              Dashboard
            </Link>
            <Link
              to="/my-profile"
              className="flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer"
            >
              <User />
              My Profile
            </Link>
            <Link
              to="/appointments"
              className="flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer"
            >
              <CalendarCheck />
              Appointments
            </Link>
            <Link
              to="/payments"
              className="flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer"
            >
              <CreditCard /> Payments
            </Link>
            <Link
              to="/complaints"
              className="flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer"
            >
              <MessageCircleWarning />
              Complaints
            </Link>
            <Link
              to="/settings"
              className="flex flex-row gap-3 px-2 py-4 hover:text-white transition-all hover:bg-[#5271ff] cursor-pointer"
            >
              <Settings />
              Settings
            </Link>

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
                    <Button className='w-3/12 hover:bg-[#1a5c32] bg-green-700'>Yes</Button>
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
