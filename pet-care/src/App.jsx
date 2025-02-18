import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navwrapper from './components/navWrapper/Navwrapper'
import Vets from './Pages/vets'
import Userlogin from './Pages/User/Userlogin'
import UserRegister from './Pages/User/UserRegister'
import Doctor from './Pages/Doctor'
function App() {

  return (
    <>
  <Router>
  <Navwrapper>
  <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<Vets/>} path='/vets'/>
    <Route element={<Userlogin/>} path='/login'/>
    <Route element={<UserRegister/>} path='/sign-up'/>
    <Route element={<Doctor/>} path='/details'/>
  </Routes>
  </Navwrapper>
  </Router>
    </>
  )
}

export default App
