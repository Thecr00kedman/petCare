import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper and SwiperSlide
import "swiper/css";
import "swiper/css/navigation";
import { veterinaryDetails } from "../../assets/data/data";

const DoctorsSlider = () => {
  return (
    <div className="w-full my-12">
      <div>
        <div className="flex flex-row justify-center items-center text-center">
          <h1 className="text-lg text-[#04CE78] uppercase">Expert doctors</h1>
        </div>
        <div className="flex flex-row justify-center items-center text-center font-semibold text-[#000D44]">
          <h1 className="text-5xl">Meet our professional Doctors</h1>
        </div>
      </div>
      <div className="w-11/12 mx-auto my-16">
        <Swiper spaceBetween={30} slidesPerView={4} loop={true} autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}>
          {veterinaryDetails?.map((item, index) => (
            <SwiperSlide key={index}>
             <div className="flex flex-col gap-3 px-2 py-4 rounded-xl my-4 mx-2 p-4 group relative cursor-pointer">
  <div className="flex relative">
    <img
      src={item?.photo}
      className="w-100 h-100 object-contain"
      alt=""
    />

    
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-700">
      <div className="flex gap-4 justify-center">
       
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square flex justify-center items-center text-black bg-white h-10 w-10 text-3xl  rounded-full"></i>
        </a>

        {/* Twitter Icon */}
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square flex justify-center items-center text-black bg-white h-10 w-10 text-3xl  rounded-full"></i>
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin flex justify-center items-center text-black bg-white h-10 w-10 text-3xl  rounded-full"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="text-xl font-semibold text-center text-[#000D44]">
    {item?.name}
  </div>
  <div className="text-sm text-center text-[#788094]">{item?.specialty}</div>
</div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DoctorsSlider;
