import React, { useState } from "react";


import Slider from "react-slick";
import "./FeaAreas.css";
import img1 from './images/img1.avif'
import img2 from './images/img2.avif'
import img3 from './images/img3.avif'

const HomeSlide = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          gap: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    };
  return (
    <>
    <div className="areas-main">
    <h5>Featured Apartments</h5>
      <div className="areas-container">
        <div className="areas-slider">
        <Slider {...settings} ref={setSliderRef} className="slider-m">
          <div className="areas-images">
            <div className="areas-car">
              <img src={img1} alt="" width="100%" />
            <div className="areas-desc">
                <span>Property</span>
            </div>
            </div>
           
          </div>
          <div className="areas-images">
            <div className="areas-car">
              <img src={img2} alt="" width="100%" />
            </div>
            <div className="areas-desc">
            <span>Property</span>
            </div>
          </div>
          <div className="areas-images">
            <div className="areas-car">
              <img src={img3} alt="" width="100%" />
            </div>
            <div className="areas-desc">
            <span>Property</span>
            </div>
            
          </div>
          
        </Slider>
        <div className="image-description">
              <div className="d-left">
                <span>Palm Jumeirah</span>
                <p>Garden Homes</p>
              </div>
              <div className="d-right">
                <span>5,500 sq.ft.</span>
                <p>Villa | 5 beds</p>
              </div>
            </div>
        </div>
        <div className="areas-slider">
        <Slider {...settings} ref={setSliderRef} className="slider-m">
          <div className="areas-images">
            <div className="areas-car">
              <img src={img1} alt="" width="100%" />
            <div className="areas-desc">
                <span>Villa</span>
            </div>
            </div>
           
          </div>
          <div className="areas-images">
            <div className="areas-car">
              <img src={img2} alt="" width="100%" />
            </div>
            <div className="areas-desc">
            <span>Villa</span>
            </div>
          </div>
          <div className="areas-images">
            <div className="areas-car">
              <img src={img3} alt="" width="100%" />
            </div>
            <div className="areas-desc">
            <span>Villa</span>
            </div>
            
          </div>
          
        </Slider>
        <div className="image-description">
              <div className="d-left">
                <span>Palm Jumeirah</span>
                <p>Garden Homes</p>
              </div>
              <div className="d-right">
                <span>5,500 sq.ft.</span>
                <p>Villa | 5 beds</p>
              </div>
            </div>
        </div>
        <div className="areas-slider">
        <Slider {...settings} ref={setSliderRef} className="slider-m">
          <div className="areas-images">
            <div className="areas-car">
              <img src={img1} alt="" width="100%" />
            <div className="areas-desc">
                <span>Property</span>
            </div>
            </div>
           
          </div>
          <div className="areas-images">
            <div className="areas-car">
              <img src={img2} alt="" width="100%" />
            </div>
            <div className="areas-desc">
            <span>Property</span>
            </div>
          </div>
          <div className="areas-images">
            <div className="areas-car">
              <img src={img3} alt="" width="100%" />
            </div>
            <div className="areas-desc">
            <span>Property</span>
            </div>
            
          </div>
          
        </Slider>
        <div className="image-description">
              <div className="d-left">
                <span>Palm Jumeirah</span>
                <p>Garden Homes</p>
              </div>
              <div className="d-right">
                <span>5,500 sq.ft.</span>
                <p>Villa | 5 beds</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeSlide;
