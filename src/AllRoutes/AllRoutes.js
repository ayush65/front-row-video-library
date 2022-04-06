import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import { Homepage } from '../pages/Homepage/Homepage';

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Homepage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes