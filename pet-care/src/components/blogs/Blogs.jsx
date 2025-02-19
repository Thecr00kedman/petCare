import { blogData } from "../../assets/data/data";
import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import BG from '../../assets/bgAll.jpg'
const Blogs = () => {
  return (
    <div style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-8">
      <div className=" flex flex-col gap-8 w-11/12 mx-auto">
      <div className="my-6">
        <div className="text-[#04ce78] tex-lg font-bold uppercase">Our Blog</div>
        <div className="text-5xl font-semibold text-[#000D44]">Our Latest News & Blogs</div>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {blogData.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg">
            {/* Image Container */}
            <div className="w-full h-52 overflow-hidden rounded-t-xl">
              <img
                className="w-full h-full object-cover"
                src={item?.image}
                alt="blog-image"
              />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center mt-2 text-gray-600 text-sm">
                <div className="flex items-center space-x-2">
                  <div>
                    <AccountBoxIcon className="text-[#04ce78]"/>
                  </div>
                  <span className="font-semibold">{item?.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div>
                    <CalendarMonthIcon className="text-[#04ce78]"/>
                  </div>
                  <span>{item?.date}</span>
                </div>
              </div>
              <div className="mt-3 text-2xl font-semibold"><Link>{item?.title}</Link></div>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Blogs;
