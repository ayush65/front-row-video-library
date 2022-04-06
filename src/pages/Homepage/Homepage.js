import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import Carousel from './carousel/Carousel'
import Categorycard from './category-card/Categorycard'
import { Footer } from './Footer/Footer'

const Homepage = () => {
  return (
    <div className="homepage-container">
    <Navbar/>
    <Carousel/>
    <Categorycard/>
    <Footer />
    </div>
  )
}

export {Homepage}