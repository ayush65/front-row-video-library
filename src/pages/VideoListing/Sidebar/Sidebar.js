import React from 'react'
import { Link } from 'react-router-dom'
import "../Sidebar/Sidebar.css"

function Sidebar() {
  return (
    <div>
         
         <div className="main-menu">
        <ul>
            <section className="primary-components-0">
                <li className="menu-item"> 
                    <Link to="/" className="text-decoration" >Playlist</Link>
                </li>
                <li className="menu-item"> 
                    <Link to="/" className="text-decoration" >Liked</Link>
                </li>    
                <li className="menu-item"> 
                    <Link to="/" className="text-decoration" >Watchlist</Link>
                </li>
                <li className="menu-item"> 
                    <Link to="/" className="text-decoration">History</Link>
                </li>   
            </section>
           
        </ul>
    </div>
    </div>
  )
}

export default Sidebar