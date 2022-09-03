import "./Navbar.css"
import {Link} from "react-router-dom"
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">LuckyBooking</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
      </div>
  )
}

export default Navbar