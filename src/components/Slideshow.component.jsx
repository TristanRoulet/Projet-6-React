import React, { useState } from 'react';
import arrow from '../assets/images/slideshow_arrow.png'

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? images.length - 1 : prevSlide - 1
      );
    };
    
    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    };
   
    return (
      <div className='slideshow'>
        <div className='slide'>
            <img src={images[currentSlide]} alt={`${currentSlide}`} className='slide-picture' />
        </div>
        {images.length > 1 && (
          <>
            <button className='slideshow-btn left' onClick={prevSlide}>
                <img src={arrow} alt='previous' className='arrow' />
            </button>
            <button className='slideshow-btn right' onClick={nextSlide}>
                <img src={arrow} alt='next' className='arrow' />
            </button>
            <div className='slide-number'>
                {currentSlide + 1}/{images.length}
            </div>
          </>  
        )}
      </div>
    );
  };

export default Carousel;
