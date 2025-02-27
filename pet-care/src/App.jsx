import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navwrapper from "./components/navWrapper/Navwrapper";
import Vets from "./Pages/Vets";
import Userlogin from "./Pages/User/Userlogin";
import UserRegister from "./Pages/User/UserRegister";
import Doctor from "./Pages/Doctor";
import ContactPage from "./ContactPage";
import ScrollProgress from "./ScrollProgress";
import BookAppointment from "./Pages/BookAppointment";
import UserPanel from "./Pages/User/UserPanel";
import Appointments from "./components/appointment/Appointments";
import ProfileWrapper from "./components/profileWrapper/ProfileWrapper";
import UserPayment from "./components/payment/UserPayment";
import UserProfile from "./components/profile/UserProfile";
import Dashboard from "./components/dashboard/Dashboard";
import Complaints from "./components/complaints/Complaints";
import PrivateRoute from "./PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer, Bounce } from "react-toastify";
import Cookies from "js-cookie";
import AuthRedirect from "./components/AuthRedirect";

function App() {
  const userCookies = Cookies.get("userInfo");
  let userInfo;
  if (userCookies) {
    userInfo = JSON.parse(userCookies);
  }
  return (
    <>
    <AuthProvider>
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <ScrollProgress />
        <Navwrapper>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Vets />} path="/vets" />

            <Route element={<Doctor />} path="/details" />
            <Route element={<ContactPage />} path="/contact-us" />
            <Route element={<BookAppointment />} path="/book-appointment" />
            <Route element={<AuthRedirect />}>
                <Route element={<Userlogin />} path="/login" />
                <Route element={<UserRegister />} path="/sign-up" />
              </Route>
            <Route element={<ProfileWrapper />}>
              <Route element={<UserPanel />} path="/profile" />

              
              {/* User Profile Routes */}
              <Route element={<PrivateRoute />}>
                <Route element={<Appointments />} path="/appointments" />
                <Route element={<UserPayment />} path="/payments" />
                <Route element={<UserProfile />} path="/my-profile" />
                <Route element={<Dashboard />} path="/dashboard" />
                <Route element={<Complaints />} path="/complaints" />
              </Route>
            </Route>
          </Routes>
        </Navwrapper>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
