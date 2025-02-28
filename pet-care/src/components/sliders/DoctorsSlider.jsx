import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper and SwiperSlide
import "swiper/css";
import "swiper/css/navigation";
import { veterinaryDetails } from "../../assets/data/data";
import BG from '../../assets/bgAll.jpg'
import useGet from "@/customHooks/useGet";


const DoctorsSlider = () => {
  const URL=import.meta.env.VITE_BACKEND_URL
  const{data,error,loading}=useGet(`${URL}/user/get-featured-doctors`)
  console.log(data,'line number 13')
  return (
    <div 
    style={{
            backgroundImage: `url(${BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full my-12">
      <div>
        <div className="flex flex-row justify-center items-center text-center">
          <h1 className="text-sm md:text-lg lg:text-lg text-[#04CE78] uppercase">Expert doctors</h1>
        </div>
        <div className="flex flex-row justify-center items-center text-center font-semibold text-[#000D44]">
          <h1 className="text-2xl md:text-3xl lg:text-5xl">Meet our professional Doctors</h1>
        </div>
      </div>
      <div className="w-11/12 mx-auto my-6 md:my-11 lg:my-16">
        <Swiper loop={true} autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0:{
                  slidesPerView:2,
                  
                },
                640: {
                  slidesPerView: 2, // Show 2 slides on small screens
                  spaceBetween: 20,  // Space between slides
                },
                768: {
                  slidesPerView: 3, // Show 3 slides on medium screens
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4, // Show 4 slides on large screens
                  spaceBetween: 40,
                },
              }}>
          {data?.foundDentist?.map((item, index) => (
            <SwiperSlide key={index}>
             <div className="flex flex-col gap-3 px-2 py-4 rounded-xl my-4 mx-2 p-4 group relative cursor-pointer">
  <div className="flex relative">
    <img
      src={item?.personalDetails?.image}
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
          <i className="fab fa-facebook-square flex justify-center items-center text-black bg-white h-4 w-4 md:h-7 md:w-7 lg:h-10 lg:w-10 text-xl md:text-2xl lg:tex-3xl rounded-full"></i>
        </a>

        {/* Twitter Icon */}
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square flex justify-center items-center text-black bg-white h-4 w-4 md:h-7 md:w-7 lg:h-10 lg:w-10 text-xl md:text-2xl lg:tex-3xl rounded-full"></i>
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin flex justify-center items-center text-black bg-white h-4 w-4 md:h-7 md:w-7 lg:h-10 lg:w-10 text-xl md:text-2xl lg:tex-3xl rounded-full"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="text-sm md:text-lg xl:text-xl font-semibold text-center text-[#000D44]">
    {item?.personalDetails?.prefix}.&nbsp;{item?.personalDetails?.Firstname}&nbsp;{item?.personalDetails?.lastName}
  </div>
  <div className="text-xs md:text-sm lg:text-sm text-center text-[#788094]">{item?.personalDetails?.specialty}</div>
</div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DoctorsSlider;
