import Cookies from 'js-cookie';
import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';

const AuthRedirect = () => {
    const userCookies=Cookies.get("userInfo")
    let userInfo;
    if(userCookies && userCookies!=="undefined"){
        userInfo=JSON.parse(userCookies)
    }
    return userInfo ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export default AuthRedirect
