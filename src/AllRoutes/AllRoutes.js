import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import { Homepage } from '../pages/Homepage/Homepage';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { Logout } from '../pages/logout/Logout';
import { SignIn } from '../pages/SignIn/SignIn';
import { Signup } from '../pages/Signup/Signup';

function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path="/logout" element={<Logout />} /> 
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
            <Route exact path="/home" element={<Homepage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes