import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper and SwiperSlide
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Comma from "../../assets/comma.png";
import "swiper/css/navigation";
import { testimonials } from "../../assets/data/data";

const Testimonials = () => {
  return (
    <div className=" bg-white">
      <div className="flex w-11/12 mx-auto flex-col p-16 gap-7">
        <div className="flex flex-col gap-6 justify-center text-center items-center m-16">
          <div className="text-lg text-[#04CE78] font-bold">TESTIMONIALS</div>
          <div className="text-5xl text-[#000D44] font-semibold">
            What Our Customers Says?
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {testimonials?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-8 p-6 bg-[#F5F7FA] rounded-2xl">
                  <div className="text-2xl text-yellow-500">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="text-lg text-[#788094]">{item?.comment}</div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-7">
                      <div className="h-16 w-16 rounded-full overflow-hidden">
                        <img
                          src={item?.photo}
                          className="w-full h-full object-contain"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-[#000D44]">
                          {item?.name}
                        </div>
                        <div className="text-[#788094]">{item?.location}</div>
                      </div>
                    </div>
                    <div className="h-16 w-16">
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
