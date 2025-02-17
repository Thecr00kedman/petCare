import React from "react";
import Doctors from "../../assets/doctors.png";
const Cta = () => {
  return (
    <div className="relative">
      <div className="bg-blue-500 w-full h-[85%] absolute bottom-0" style={{ zIndex: -10 }}></div>
      <div className="flex flex-row relative w-11/12 mx-auto my-0">
        <div className="flex flex-col justify-center w-2/3 px-4 gap-7">
          <div className="text-5xl text-white font-semibold">
            We’re welcoming new patients and can’t wait to meet you!
          </div>
          <span className="text-lg  text-white">
            A brief statement outlining the purpose and mission of the clinic.
            This can include the commitment to patient care, community health,
            and any specific goals or values. Specify the types of medical
            services provided
          </span>
          <div className="flex flex-row gap-8 items-start m-0">
            <button className="px-3 py-5 w-2/5 text-sm font-semi-bold rounded-full bg-[linear-gradient(180deg,_#04CE78_37.5%,_#DDFFF1_100%)] shadow-custom uppercase">Book Appointment</button>
            <button className="px-3 py-5 w-2/5 text-sm font-semi-bold rounded-full bg-[linear-gradient(180deg,_#C2D4FF_37.5%,_#F0F4FF_100%)] shadow-custom uppercase">Get Free Consulting</button>
          </div>
        </div>
        <div className="flex">
          <img src={Doctors} alt="text" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
