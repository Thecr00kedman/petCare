import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const[IsLoggedIn,setIsLoggedIn]=useState(false)

  useEffect(() => {
    const userCookie = Cookies.get("userInfo");
    console.log(userCookie, "line 12");
    if (userCookie && userCookie !== "undefined") {
      setUser(JSON.parse(userCookie));
      setIsLoggedIn(true);
    }
    setLoading(false); // ✅ Update loading state after fetching
  }, []);
  
  return (
    <AuthContext.Provider value={{ user, IsLoggedIn, setIsLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
