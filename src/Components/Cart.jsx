import React from 'react'
import thumbnail from '../assets/img/image-product-1-thumbnail.jpg'
import iconDelete from '../assets/img/icon-delete.svg' 

import '../assets/css/cart.css'

const Cart = () => {
    const text = "Fall Limited Edition Sneakers"

  return (
    <>
      <article className='card'>
      <h4 className='cart'>cart</h4>
        <div className='cart-caption flex'>
            <img src={thumbnail} alt="" className='cart-img' />
            <ul className='cart-list'>
                <li> {`${text.substring(0, 28)}...`} </li> <br/>
                <li> $125.00 x 3 <strong>$375.00</strong> </li>
            </ul>
            <div>
            <button className='icon-del'>
                <img src={iconDelete} alt="" />
            </button>
            
            </div>
            
        </div>

        
      <button className='btn btn-sec'>Checkout</button>
    </article>

    
    <article className='small-card'>
      <h4 className='cart-small'>cart</h4>
        <div className='cart-caption-small flex'>
            <img src={thumbnail} alt="" className='cart-img' />
            <ul className='cart-list-small'>
                <li> {`${text.substring(0, 28)}...`} </li> <br/>
                <li> $125.00 x 3 <strong>$375.00</strong> </li>
            </ul>
            <div>
            <button className='icon-del-small'>
                <img src={iconDelete} alt="" />
            </button>
            
            </div>
            
        </div>

        
      <button className='btn btn-sec-small'>Checkout</button>
    </article>
    


    </>
  )
}

export default Cart
