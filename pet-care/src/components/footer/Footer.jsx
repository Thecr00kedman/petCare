import React from "react";
import FooterBg from "../../assets/footerBg.jpg";
import Logo1 from "../../assets/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhoneAlt,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="flex flex-col">
      <div style={{ backgroundImage: `url(${FooterBg})` }}>
        <div className="flex flex-col md:flex-col lg:flex-row lg:flex p-6 md:p-10 lg:p-16 gap-10">
          <div className="w-full flex md:w-full md:my-4 lg:w-4/12 flex-col gap-4">
            <div className="w-40 h-24">
              <img
                className="w-full h-full object-contain"
                src={Logo1}
                alt=""
              />
            </div>
            <div className="flex flex-row items-center">
              <div className="text-green-500">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              </div>
              <div className="text-[#969EB2]">2478 Street City Ohio 90255</div>
            </div>
            <div className="flex flex-row items-center">
              <div className="text-green-500">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              </div>
              <div className="text-[#969EB2]">info@petcare.com</div>
            </div>
            <div className="flex flex-row items-center">
              <div className="text-green-500">
                <FontAwesomeIcon icon={faMessage} className="mr-2" />
              </div>
              <div className="text-[#969EB2]">+(402) 763 282 46</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 w-full md:grid-cols-3 md:w-full lg:grid-cols-3 lg:w-8/12 gap-6">
            <div className="flex flex-col gap-3">
              <div className="text-white text-3xl mb-4 md:mb-6 lg:mb-8">Quick Links</div>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Home
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                About us
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Blogs
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Contact Us
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-white text-3xl mb-4 md:mb-6 lg:mb-8">
                Popular Services
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Wellness Check Up
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Emergency Care
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Vaccination Service
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Dental Care
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Pet Nutrition Consultations
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-white text-3xl mb-4 md:mb-6 lg:mb-8">
                Popular Services
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Wellness Check Up
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Emergency Care
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Vaccination Service
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Dental Care
              </a>
              <a href="#" className="text-[#969EB2] hover:text-red-500">
                Pet Nutrition Consultations
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg bg-blue-500 text-white text-center px-2 py-4">
        <p>&copy; {new Date().getFullYear()} Aditya. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
