import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './slider.css'; 

const SliderComponent = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (slide) => setCurrentSlide(slide),
    arrows: true, // Add arrows for manual navigation
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {/* Add your slide content here */}
            <img src={slide.imageUrl} alt={slide.title} />
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
      <div className="slider-dots">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <div className="slider-arrows">
        <button className="arrow prev" onClick={handlePrevSlide}>
          <i className="fas fa-chevron-left"></i> {/* Font Awesome for arrow */}
        </button>
        <button className="arrow next" onClick={handleNextSlide}>
          <i className="fas fa-chevron-right"></i> {/* Font Awesome for arrow */}
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
