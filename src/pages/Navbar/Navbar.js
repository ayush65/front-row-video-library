import React,{useState} from 'react'
import "./Navbar.css"
import { BsPersonCircle} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom'


const Navbar = ()  => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
     <div className="navbar-container">  
     <div className="navbar-logo">
             <Link to="/" className="navbar-links-header"><h1>Front Row Video</h1></Link>
    </div>
    <div className={
            showMediaIcons ? "menu-link mobile-menu-link navbar-menu" : "menu-link navbar-menu"
          }>
            <ul className="navbar-list-links">

                <li className="navbar-links">
                <Link to="" className="navbar-links">Trending</Link>
                </li>
                <li className="navbar-links">
                    <Link to="" className="navbar-links">Latest</Link>
                </li>
                <li className="navbar-links">
                <Link to="" className="navbar-links">Categories</Link>
                </li>
            </ul>
        </div>

        <div className="navbar-components">
            <ul className="navbar-list-links-components"> 
                <li className="navbar-links icons-align">
                    <Link to="/logout" className="icon-size"><BsPersonCircle /></Link>
                </li>

            </ul>
        </div>

        <div className="hamburger-menu">
            <Link to="" className="icon-size" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </Link>
          </div>
  </div></>
  )
}

export {Navbar}