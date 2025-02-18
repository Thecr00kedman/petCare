import React from "react";
import Logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 w-full z-40">
      <div className="flex flex-row justify-between items-center px-2 py-2 w-full bg-white shadow-md">
        <div className="h-16 w-36">
          <img className="w-full h-full object-contain" src={Logo} alt="Logo" />
        </div>
        <ul className="flex flex-row justify-between gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vets">Vets</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Blogs</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
        </ul>
        <Link
          to="/login"
          className="px-5 py-2 text-white text-center rounded-full w-36 bg-green-500 mr-4"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
