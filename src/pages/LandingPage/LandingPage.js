import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import './LandingPage.css'

const  LandingPage = () => {
  return (
    <>
    <Navbar/>

     <div className="landing-page-component">
        <h1 className="landing-page-heading">Front Row Video Library</h1>
        <h1 className="landing-page-content">One Stop Destination For Day To Day Entertainment</h1>
        <Link to="/signin" className="button simple-button" >Login</Link>
        <Link to="/signup" className="button primary-outline" >Sign up</Link> 

        </div>
    </>
  )
}

export {LandingPage}
