import React from 'react'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const stats = [
        { value: 10, suffix: "k+", label: "Satisfied Patients" },
        { value: 150, suffix: "+", label: "Professional Doctors" },
        { value: 1, suffix: "k+", label: "Operations Successful" },
        { value: 320, suffix: "+", label: "National Awards Win" },
      ];
  return (
    <div ref={ref} className='w-11/12 mx-auto my-4'>
      <div className="flex flex-row w-full justify-center items-between bg-[#001144] text-white px-6 py-6 rounded-3xl">
      {stats.map((stat, index) => (
        <div key={index} className="w-full text-center px-3 md:px-6 lg:px-8 border-r last:border-none border-white/50">
          <h2 className="text-xl md:text-3xl lg:text-6xl font-bold text-green-400">
            {inView ? <CountUp end={stat?.value} duration={2} /> : "0"}
            {stat.suffix}
          </h2>
          <p className="text-gray-300 text-xs md:text:lg lg:text-xl">{stat?.label}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Counter
