import React from "react";
import { workProcess } from "../../assets/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BG from '../../assets/bgAll.jpg'

const Work = () => {
  return (
    <div className="flex flex-col gap-16 my-16"
    style={{
                backgroundImage: `url(${BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>
      <div className="flex items-center justify-center gap-4 flex-col">
      <div>
        <h6 className="text-lg font-semibold uppercase text-[#04CE78]">Work Process</h6>
      </div>
      <div className="text-5xl font-semibold text-[#000D44]">
      Let’s See How We Work Process
      </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 m-8">
        {workProcess.map((item, index) => (
          <div className="flex flex-col items-center gap-3 p-4" key={index}>
            <div className="flex items-center text-white  justify-center h-8 w-8 rounded-full bg-black mb-8">{index+1}</div>
            <div><FontAwesomeIcon icon={item?.icon} className="text-3xl text-blue-500" /></div>
            <div className="text-center text-2xl font-semibold text-[#000D44]">{item?.title}</div>
            <div className="text-center text-[#788094]">{item?.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
