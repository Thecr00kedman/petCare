import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button"
const Userlogin = () => {
  return (
<div className="w-4/6 mx-auto my-20">
<div className="flex flex-col gap-4 my-20">
      <div className="text-5xl text-center font-semibold my-4 text-[#000D44]">
        Login
      </div>
      <div className="flex flex-col gap-3 w-2/5 mx-auto my-2">
        <input
          className="px-8 py-3 shadow-sm"
          type="text"
          name="email"
          placeholder="Email or Phone"
        />
        <input
          className="px-8 py-3 shadow-sm"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div className="w-2/5 mx-auto"><span>New User?</span>&nbsp;<Link className="hover:text-blue-600" to='/sign-up'>Register Here.</Link></div>
      <div className="w-2/5 mx-auto">Login with Otp instead</div>
      <button className="w-2/5 rounded-sm bg-[#5470ff] text-white mx-auto px-8 py-3 my-0 ">
        Sign In
      </button>
    </div>
</div>
  );
};

export default Userlogin;
