import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Videocard from './Videocards/Videocards'

const Videolisting = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Videocard />
    </div>
  )
}

export  {Videolisting}