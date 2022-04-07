import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import { Homepage, LandingPage , Logout , SignIn ,Signup , Videolisting} from '../pages/index';
import Mockman from "mockman-js";
import Watchlater from '../pages/Watchlater/Watchlater';
import Liked from '../pages/Liked/Liked';

function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path="/liked" element={<Liked />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/videolisting" element={<Videolisting />} />
        <Route path="/mockman" element={ <Mockman />}></Route> 
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