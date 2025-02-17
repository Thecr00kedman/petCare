import React from "react";
import { serviceData } from "../../assets/data/data";


const Services = () => {
  return (
    <div className="w-11/12 mx-auto my-0">
        <div className="flex flex-col items-center mx-0 my-12 gap-4">
        <div className="flex text-xl text-center">
            <h4 className="text-lg text-[#04CE78]">Our Services</h4>
        </div>
        <div className="text-5xl text-800 text-center font-semibold text-[#000D44]">Our Pet Care Specialties <br />
         Technical service</div>
        </div>
      <div className="grid grid-cols-4 items-center gap-4 m-4">
        {serviceData?.map((item,index)=>(
            <div className="flex flex-col items-center bg-white px-3 py-6 gap-4 border-2 border-blue-100 rounded-3xl shadow-0px 2px 20px rgba(0, 0, 0, 0.06)" key={index}>
          <div className="text-5xl">
          <i className={item?.icon}></i>
          </div>
          <h3 className="text-xl">{item?.name}</h3>
          <h6>{item?.doctors}+</h6>
          <button className="w-2/3 px-2 py-4 text-black bg-gradient-to-b from-[#C2D4FF] to-[#F0F4FF] shadow-btn text-center rounded-full">Read More</button>
        </div>))}
      </div>
    </div>
  );
};

export default Services;
