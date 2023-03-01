import React from 'react'
import './FeaApartment.css'
import {BiChevronRight} from 'react-icons/bi'

import img1 from './images/img1.avif'
import img2 from './images/img2.avif'
import img3 from './images/img3.avif'
import Slider from "react-slick";


const FeaApartment = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
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
    <div className='feature-container'>
        <article></article>
        <h5 className='f-heading'> Popular Areas</h5>   
    </div>
    <Slider {...settings}  className="feature-cards">
    <div className="f-card">
                <img src={img1} alt="" />
                <div className="f-description">
                    <h5>Business Bay</h5>
                    <a href="">Learn More <BiChevronRight className='f-icon'/></a> 
                </div>
            </div>
            <div className="f-card">
                <img src={img2} alt="" />
                <div className="f-description">
                    <h5>Business Bay</h5>
                    <a href="">Learn More <BiChevronRight className='f-icon'/></a> 
                </div>
            </div>
            <div className="f-card">
                <img src={img3} alt="" />
                <div className="f-description">
                    <h5>Business Bay</h5>
                    <a href="">Learn More <BiChevronRight className='f-icon'/></a> 
                </div>
            </div>
            <div className="f-card">
                <img src={img3} alt="" />
                <div className="f-description">
                    <h5>Business Bay</h5>
                    <a href="">Learn More <BiChevronRight className='f-icon'/></a> 
                </div>
            </div>
        </Slider>
        </>
  )
  
}

export default FeaApartment
