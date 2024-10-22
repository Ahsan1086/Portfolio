import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaEnvelopeOpen } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";



export default function Navbar() {
  const [theme, setTheme] = useState("dark-theme");

  function changeTheme() {
      
      const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
      setTheme(newTheme);
      document.querySelector("body").className = newTheme;
  }
  return (
    <div className='nav'>
      <div className="navbar">
     
            <Link className='anker' to="/"> <span className='text' >HOME</span>    <IoHome className='icon'/>  </Link>
            <Link className='anker' to="about"> <span className='text'>ABOUT</span>    <IoPerson className='icon'/>  </Link>
            <Link className='anker' to="portfolio"> <span className='text'>PORTOLFIO</span><FaBusinessTime className='icon'/>  </Link>
            <Link className='anker' to="contact"> <span className='text'>CONTACT</span>  <FaEnvelopeOpen className='icon'/>  </Link>
            <Link className='anker' to="blog"> <span className='text'>BLOG</span>     <IoChatbubbles className='icon'/>  </Link>
            
      </div>

      <div className='theme1'>
        <button onClick={changeTheme}>
          {
          theme==="dark-theme" ? (<IoSunnyOutline className='themeicon'/>):(<BsMoon className='themeicon'/>)
          }

        </button>
      </div>
    </div>
  )
}
