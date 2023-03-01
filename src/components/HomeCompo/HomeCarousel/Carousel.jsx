import React, { useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import Slider from "react-slick";
import "./Carousel.css";
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'

const HomeSlide = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

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
      <div className="home-container">
        <Slider {...settings} ref={setSliderRef} className="home-slider">
          <div className="home-images">
            <div className="home-car">
              <img src={img1} alt="" width="100%" />
            </div>
            <div className="home-desc">
                <span>New Development</span>
                <h5>Baccarat Residences</h5>
                <span>Downtown Dubai</span>
                <button>Inquire Now</button>
            </div>
          </div>
          <div className="home-images">
            <div className="home-car">
              <img src={img2} alt="" width="100%" />
            </div>
            <div className="home-desc">
            <span>New Development</span>
                <h5>Baccarat Residences</h5>
                <span>Downtown Dubai</span>
                <button>Inquire Now</button>
            </div>
          </div>
          <div className="home-images">
            <div className="home-car">
              <img src={img3} alt="" width="100%" />
            </div>
            <div className="home-desc">
            <span>New Development</span>
                <h5>Baccarat Residences</h5>
                <span>Downtown Dubai</span>
                <button>Inquire Now</button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HomeSlide;
