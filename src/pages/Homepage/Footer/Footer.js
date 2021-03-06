import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className="Footer-container">
    
        <div className="Footer">
        <div className="footer-col">
  	 			<ul className="footer-links footer-align">
  	 				<li><Link to="" className="footer-links">About us</Link></li>
  	 				<li><Link to=""  className="footer-links" >Services</Link></li>
  	 				<li><Link to="" className="footer-links" >privacy policy</Link></li>
  	 			</ul>
  	 		</div>
               <div className="footer-company-copyright">
                   <div>  Copyright © Front Row Video</div>
                  
               </div>
        </div>

    </div>
  )
}

export {Footer}