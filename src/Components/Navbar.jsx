import React from 'react'
import '../assets/css/navbar.css'




const Navbar = ({isOpen}) => {
  return (
    <>
     <nav className={isOpen && "open"}>
        <ul className="nav-items">
            <li className='nav-list'><a href="#"></a>Collections</li>
            <li className='nav-list'><a href="#"></a>Men</li>
            <li className='nav-list'><a href="#"></a>Women</li>
            <li className='nav-list'><a href="#"></a>About</li>
            <li className='nav-list'><a href="#"></a>Contact</li>
           
        </ul>
        </nav> 
      
       
    </>
    
  )
}

export default Navbar
