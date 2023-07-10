import React, { useState } from 'react'
import '../assets/css/body.css'
import minus from '../assets/img/icon-minus.svg'
import plus from '../assets/img/icon-plus.svg'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Body = () => {
    const [amount, setAmount] = useState(0);
    const handleMinus = () => {
      setAmount(amount - 1);
      if (amount <= 0) setAmount(0)
    };

  return (
    <article className='col-6 main-body'>
      <h4 className='title'>Sneaker Company</h4>
      <h2 className='subtitle'>Fall Limited Edition Sneakers</h2>
      <p className='caption'> These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div>
                <ul className='money-list flex'>
                    <li className='fig1'>$125.00</li>
                    <li className='fig2'>50%</li>
                    <p className='fig-mobile'><s>$250.00</s></p>
                </ul>
                <p className='fig3'><s>$250.00</s></p>
            </div>
            <div className='body flex'>
                <ul className='obj-item flex'>
                    <li onClick={handleMinus}> <img src={minus} alt="" /> </li>
                    <li> {amount} </li>
                    <li onClick={() => setAmount(amount + 1)}> <img src={plus} alt="" /></li>
                </ul>
            
                <button className='btn btn-primary' > <AiOutlineShoppingCart className='pri-icon'/> Add to cart </button>
            
            </div>
    </article>
  )
}

export default Body
