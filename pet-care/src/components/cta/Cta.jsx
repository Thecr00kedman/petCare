import React from "react";
import Doctors from "../../assets/doctors.png";
import { useNavigate } from "react-router-dom";
const Cta = () => {
  const navigate=useNavigate()
  const handleNavigate=(url)=>{
    navigate(`${url}`)
  }
  return (
    <div className="relative">
      <div className="bg-blue-500 w-full h-full md:h-full lg:h-[85%] absolute bottom-0" style={{ zIndex: -10 }}></div>
      <div className="flex flex-row relative w-11/12 mx-auto my-4">
        <div className="flex flex-col justify-center w-full md:w-full lg:w-2/3 px-4 gap-3 p-4">
          <div className="text-2xl md:text-3xl lg:text-5xl text-white font-semibold">
            We’re welcoming new patients and can’t wait to meet you!
          </div>
          <span className="text-xs md:text-sm lg:text-lg text-white">
            A brief statement outlining the purpose and mission of the clinic.
            This can include the commitment to patient care, community health,
            and any specific goals or values. Specify the types of medical
            services provided
          </span>
          <div className="flex flex-row gap-3 md:gap-5 lg:gap-8 items-start m-0">
            <button className="px-2 py-4 w-full md:w-2/5 lg:w-2/5 text-xs md:text-sm lg:text-sm font-semi-bold rounded-full bg-[linear-gradient(180deg,_#04CE78_37.5%,_#DDFFF1_100%)] shadow-custom capitalize md:capitalize lg:uppercase" onClick={()=>handleNavigate('/vets')}>Book Appointment</button>
            <button className="px-2 py-4 w-full md:w-2/5 lg:w-2/5 text-xs md:text-sm lg:text-sm font-semi-bold rounded-full bg-[linear-gradient(180deg,_#C2D4FF_37.5%,_#F0F4FF_100%)] shadow-custom capitalize md:capitalize lg:uppercase">Get Free Consulting</button>
          </div>
        </div>
        <div className="hidden md:hidden lg:flex">
          <img src={Doctors} alt="text" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
