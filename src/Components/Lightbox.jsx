import React from 'react'
import {FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../assets/css/lightbox.css'

const Lightbox = ({products, slideIndex, nextSlide, previousSlide, setShowLightbox}) => {
  

  return (
    <>
      <article className='lightbox'>
        {/* <button onClick={() => setShowLightbox(false)} className='btn icon-close'><img src={closes} alt="" className='close-img' /></button> */}
        <button onClick={() => setShowLightbox(false)} className='btn icon-close'><p className='close-img'>X</p></button>
        <div className='container-lightbox'>
            {products.map((item, index) => (
                 <div  key ={index} className={ slideIndex === index + 1 ? "display" : "hidden" }>
                 {/* <img src={item.mainImage} alt=""  className='main-image mobile'/> */}
               <ul className='arrow-items visible'>
               <li className='arrow-icons'><button onClick={previousSlide} className='icon-arrow left'><FaChevronLeft className='left'/></button></li>
               <li className='arrow-icons'><button onClick={nextSlide} className='icon-arrow right'><FaChevronRight/></button></li>
              </ul>
              <img src={item.mainImage} alt=""  className='lightbox-image'/>
              {/* <img src={mainImage} alt=""  className='main-image desc' onClick={() => setShowLightbox(true)} /> */}
              </div>
            ))}
        </div>

        
      </article>
    </>
  )
}

export default Lightbox
