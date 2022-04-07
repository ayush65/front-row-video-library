import React from 'react'
import { Link } from 'react-router-dom'
import './carousel.css'

function Carousel() {
  return (
    <>
        <div className="Banner-image">

</div>
<div className="Banner-container">
  <h1>Front Row Video</h1>
  <h2>One Stop Destination For Day To Day Entertainment</h2>
  <Link to="/videolisting" className="btn btn-banner">Watch Now</Link>

</div>
    </>
  )
}

export default Carousel