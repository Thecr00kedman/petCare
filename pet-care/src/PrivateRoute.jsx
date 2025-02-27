import React from "react";
import { Navigate,Outlet } from "react-router-dom";

import Cookies from "js-cookie";

const PrivateRoute = () => {
  const user= Cookies.get('userInfo')
  let userCookie;
  if(user){
     userCookie=JSON.parse(user)
  }

  return userCookie ? <Outlet/> : <Navigate to="/login" />;
};

export default PrivateRoute;
