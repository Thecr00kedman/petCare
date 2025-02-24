import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navwrapper from './components/navWrapper/Navwrapper'
import Vets from './Pages/Vets'
import Userlogin from './Pages/User/Userlogin'
import UserRegister from './Pages/User/UserRegister'
import Doctor from './Pages/Doctor'
import ContactPage from './ContactPage'
import ScrollProgress from './ScrollProgress'
import BookAppointment from './Pages/BookAppointment'
import UserPanel from './Pages/User/UserPanel'
import Appointments from './components/appointment/Appointments'
import ProfileWrapper from './components/profileWrapper/ProfileWrapper'
function App() {
  
  return (
    <>
  <Router>
    <ScrollProgress/>
  <Navwrapper>
  <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<Vets/>} path='/vets'/>
    <Route element={<Userlogin/>} path='/login'/>
    <Route element={<UserRegister/>} path='/sign-up'/>
    <Route element={<Doctor/>} path='/details'/>
    <Route element={<ContactPage/>} path='/contact-us' />
    <Route element={<BookAppointment />} path='/book-appointment'/>
   <Route element={<ProfileWrapper/>}>
   <Route element={<UserPanel />} path='/profile'/>

{/* User Profile Routes */}
<Route element={<Appointments/>} path='/appointments'/>
   </Route>
  </Routes>
  </Navwrapper>
  </Router>
    </>
  )
}

export default App
