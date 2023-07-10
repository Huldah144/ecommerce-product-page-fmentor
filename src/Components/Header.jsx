import React, { useState } from 'react'
import logo from '../assets/img/logo.svg'
import avatar from '../assets/img/image-avatar.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import menu from '../assets/img/icon-menu.svg'
import close from '../assets/img/icon-close.svg'

import Navbar from './Navbar'
import Cart from './Cart'

import '../assets/css/header.css'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false)

  return (
    <header className="container">
      <div className="main-header">
        <ul className='group1 flex'>
          {!isOpen && <li onClick={() => setIsOpen(true)}><img src={menu} alt=""  className='menu'/></li>}
          {isOpen && <li onClick={() => setIsOpen(false)}><img src={close} alt=""  className='close'/></li>}
          <li> <img src={logo} alt="" className='logo'/></li>
        </ul>
        <Navbar isOpen ={isOpen}/>
        
        <div>
        <ul className='group2 flex'> 
        <li className='icons-list'><button onClick={() => setCartIsOpen(!cartIsOpen)} className='btn btn-cart'> <AiOutlineShoppingCart/> </button></li>
      
        <li> {cartIsOpen && <Cart/>} </li>

        <li className='icons-list'><img src={avatar} alt="" className='img-nav'/></li>
        </ul>
        </div>
      
      </div>
    </header>
  )
}

export default Header
