import React from "react";
import { workProcess } from "../../assets/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BG from '../../assets/bgAll.jpg'

const Work = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10 lg:gap-16 my-16"
    style={{
                backgroundImage: `url(${BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>
      <div className="flex items-center justify-center gap-4 flex-col w-11/12 mx-auto my-4 text-center">
      <div>
        <h6 className="text-sm md:text-lg lg:text-lg font-semibold uppercase text-[#04CE78]">Work Process</h6>
      </div>
      <div className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#000D44]">
      Let’s See How We Work Process
      </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mx-3 my-4 md:m-6 lg:m-8">
        {workProcess.map((item, index) => (
          <div className="flex flex-col items-center gap-[10px] md:gap-3 lg:gap-3 p-2 md:p-3 lg:p-4" key={index}>
            <div className="flex items-center text-white  justify-center h-8 w-8 rounded-full bg-black mb-8">{index+1}</div>
            <div><FontAwesomeIcon icon={item?.icon} className="text-4xl text-blue-500" /></div>
            <div className="text-center text-sm md:text-lg lg:text-2xl font-semibold text-[#000D44]">{item?.title}</div>
            <div className="text-center text-xs md:text-lg lg:text-lg text-[#788094]">{item?.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
