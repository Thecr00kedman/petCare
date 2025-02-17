import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
function App() {

  return (
    <>
  <Router>
  <Routes>
    <Route element={<Home/>} path='/'/>
  </Routes>
  </Router>
    </>
  )
}

export default App
