import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper and SwiperSlide
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Comma from "../../assets/comma.png";
import "swiper/css/navigation";
import useGet from "@/customHooks/useGet";
import { testimonials } from "../../assets/data/data";


const Testimonials = () => {
  //  const [testimonials, setTestimonials] = useState([]);
  //   const [pageLoading, setPageLoading] = useState(true);
  //   const [pageError, setPageError] = useState(null);
  //   const URL=import.meta.env.VITE_BACKEND_URL
  //   const { data, loading, error } = useGet(`${URL}/user/get-testimonials`);
  //   console.log(data,'line 19')
  //   useEffect(() => {
  //     if (data) {
  //       setTestimonials(data?.testimonials);
  //       setPageLoading(false)
  //     }
  //     if(loading){
  //       setPageLoading(true)
  //     }
  //     if(error){
  //        setPageError(error)
  //     }
  //   }, [data]);
  //   console.log(testimonials,'line 22')
  return (
    <div className=" bg-white">
      <div className="flex w-11/12 mx-auto flex-col sm:p-2 md:p-6 lg:p-16 gap-7">
        <div className="flex flex-col gap-6 justify-center text-center items-center m-6 md:m-11 lg:m-16">
          <div className="text-sm md:text-lg lg:text-lg text-[#04CE78] font-bold">TESTIMONIALS</div>
          <div className="text-2xl md:text-3xl lg:text-5xl text-[#000D44] font-semibold">
            What Our Customers Says?
          </div>
        </div>
        <div>
        <Swiper
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  modules={[Autoplay]} // ✅ Fixed: Closing array properly
  breakpoints={{
    640: {
      slidesPerView: 1, // Show 2 slides on small screens
      spaceBetween: 20,  // Space between slides
    },
    768: {
      slidesPerView: 1, // Show 3 slides on medium screens
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2, // Show 4 slides on large screens
      spaceBetween: 40,
    },
  }}
>
            {testimonials?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-8 p-6 bg-[#F5F7FA] rounded-2xl">
                  <div className="text:lg md:text-xl lg:text-2xl text-yellow-500">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="text-sm md:text-lg lg:text-lg text-[#788094]">{item?.comment}</div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-7">
                      <div className="h-16 w-16 rounded-full overflow-hidden">
                        <img
                          src={item?.photo}
                          className="w-full h-full object-contain"
                          alt="photo"
                        />
                      </div>
                      <div>
                        <div className="text-sm md:text-lg lg:text-xl font-bold text-[#000D44]">
                          {item?.name}
                        </div>
                        <div className="text-[#788094] text-sm md:text-lg lg:text-xl">{item?.location}</div>
                      </div>
                    </div>
                    <div className="h-12 w-12 md:h-16 md:w-16 lg:h-16 lg:w-16">
                      <img
                        className="h-full w-full object-contain"
                        src={Comma}
                        alt="text"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
