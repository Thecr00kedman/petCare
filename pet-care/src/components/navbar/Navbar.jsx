import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger menu icons
import Logo from "../../assets/logo2.png";
import { User } from "lucide-react";
import Cookies from "js-cookie";
import { AuthContext } from "@/context/AuthProvider";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/vets", label: "Vets" },
  { path: "/about", label: "About" },
  { path: "/blogs", label: "Blogs" },
  { path: "/contact-us", label: "Contact Us" },
];


const Navbar = () => {
  const{user,IsLoggedIn}=useContext(AuthContext)
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 right-0 w-full z-40 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3 w-full">
        {/* Logo */}
        <div className="h-16 w-36">
          <img className="w-full h-full object-contain" src={Logo} alt="Logo" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-5">
          {NAV_LINKS.map(({ path, label }) => (
            <li
              key={path}
              className={`transition-all duration-300 ${
                location.pathname === path ? "text-blue-300" : "text-black"
              }`}
            >
              <Link className="text-xl " to={path}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        {<Link
          to={IsLoggedIn?"/dashboard":"/login"}
          className={IsLoggedIn?"hidden md:hidden lg:flex border-gray-100 border-2 rounded-full w-12 h-12 items-center justify-center lg:text-lg":"hidden lg:block px-5 py-2 text-white text-center rounded-full w-36 bg-green-500"}
        >
          {IsLoggedIn?<User/>:"Login"}
        </Link>}
      </div>

      {/* Mobile Navigation with Smooth Transition */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 bg-white shadow-md">
          {NAV_LINKS.map(({ path, label }) => (
            <li
              key={path}
              className={`transition-all duration-300 ${
                location.pathname === path ? "text-blue-300" : "text-black"
              }`}
            >
              <Link
                className="text-xl "
                to={path}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          {<Link
          to={IsLoggedIn?"/dashboard":"/login"}
          className={IsLoggedIn?" border-gray-100 border-2 rounded-full w-12 h-12 flex items-center justify-center lg:text-lg":"hidden lg:block px-5 py-2 text-white text-center rounded-full w-36 bg-green-500"}
        >
          {IsLoggedIn?<User/>:"Login"}
        </Link>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
