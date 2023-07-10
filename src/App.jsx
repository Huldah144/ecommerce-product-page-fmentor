import { useState } from 'react'
import { data } from './data'
import {FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import './App.css'
import Header from './Components/Header'
import Body from './Components/Body';
import Attribution from './Components/Attribution';
import Lightbox from './Components/Lightbox'

function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false)

  const{mainImage} = products[value];

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === products.length) {
      setSlideIndex(1)
    }
  }

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)  
    } else if (slideIndex === 1) {
      setSlideIndex(products.length)
    }
  }

  return (
    <>
     <Header/>
     {showLightbox && <Lightbox products ={products} 
                                slideIndex ={slideIndex} 
                                nextSlide ={nextSlide} 
                                previousSlide ={previousSlide} 
                                setShowLightbox={setShowLightbox} />}


     <section className='container row'>
     <article className='col-6'>
      {/* <img src={mainImage} alt=""  className='main-image desc'/> */}
      <div className='mobile'>
        {products.map((item, index) => (
      <div  key ={index} className={ slideIndex === index + 1 ? "display" : "hidden" }>
        {/* <img src={item.mainImage} alt=""  className='main-image mobile'/> */}
      <ul className='arrow-list'>
      <li className='arrow-icons'><button onClick={previousSlide} className='arrow left'><FaChevronLeft className='left'/></button></li>
      <li className='arrow-icons'><button onClick={nextSlide} className='arrow right'><FaChevronRight/></button></li>
     </ul>
     <img src={item.mainImage} alt=""  className='main-image desc' onClick={() => setShowLightbox(true)} />
     <img src={item.mainImage} alt=""  className='main-image mobile'/>
     </div>
        ))}
      </div>
     
          {/* <img src={mainImage} alt=""  className='main-image desc'/> */}
        <div className='desk-show'>
        
        {/* <img src={item.mainImage} alt=""  className='main-image mobile'/> */}
        {/* <ul className='arrow-list'>
        <li className='arrow-icons'><button onClick={previousSlide} className='arrow left'><FaChevronLeft className='left'/></button></li>
        <li className='arrow-icons'><button onClick={nextSlide} className='arrow right'><FaChevronRight/></button></li>
       </ul> */}
       <img src={mainImage} alt=""  className='main-image desc' onClick={() => setShowLightbox(true)} />
       {/* <img src={item.mainImage} alt=""  className='main-image mobile'/> */}
       {/* </div> */}
          
        </div>

      <ul className='product-item'>
      {products.map((item, index) => (
        <li key = {item.id} onClick={() => setValue(index)} className={index === value && "product-list"}>
          <img src={item.thumbnail} alt="" className='thumbnail' />
        </li>
      ))}
      </ul>
     </article>
     <Body/>
     </section>
     <Attribution/>
     
    </>

  )
}

export default App
