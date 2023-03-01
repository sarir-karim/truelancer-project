import React, { useState } from 'react'
import './Ofplan.css'
import {BiChevronRight} from 'react-icons/bi'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './images/img1.avif'
import img2 from './images/img2.avif'
import img3 from './images/img3.avif'

import Slider from "react-slick";
const images = [
  {
    img: img1,
    desc: "Business Bay",
    link: "Learn More",
  },
  {
    img: img2,
    desc: "Business Bay",
    link: "Learn More",
  },
  {
    img: img3,
    desc: "Business Bay",
    link: "Learn More",
  },
  {
    img: "https://images.pexels.com/photos/2525899/pexels-photo-2525899.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Business Bay",
    link: "Learn More",
  },
  // {
  //   img: img4,
  //   desc: "Business Bay",
  //   link: "Learn More",
  // },
];

const FeaApartment = () => {
   const [slideIndex, setSlideIndex] = useState(0);

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    beforeChange: (current, next)=>setSlideIndex(next),
    centerMode: true,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }]
  };
  return (
    <>
    <div className='of-container'>
        <article></article>
        <h5 className='f-heading'>Off-plan Properties</h5>   
    </div>
    {/* <Slider {...settings}  className="of-cards">
    <div className="o-card">
                <img src={img1} alt="" />
                <div className="o-description">
                    <h5>Business Bay</h5>
                    <a href="">Learn More <BiChevronRight className='o-icon'/></a> 
                </div>
            </div>
            <div className="o-card">
                <img src={img2} alt="" />
                <div className="o-description">
                    <h5>Business Bay</h5>
                    <a href="">Learn More <BiChevronRight className='o-icon'/></a> 
                </div>
            </div>
            <div className="o-card">
                <img src={img3} alt="" />
                <div className="o-description">
                    <h5>Business Bay</h5>
                    <a href="">Learn More <BiChevronRight className='o-icon'/></a> 
                </div>
            </div>
            <div className="o-card">
                <img src={img3} alt="" />
                <div className="o-description">
                    <h5>Business Bay</h5>
                    <a href="">Learn More <BiChevronRight className='o-icon'/></a> 
                </div>
            </div>
        </Slider> */}
         <Slider {...settings} className="of-slider">
          {
            images.map((item, index)=>(
              <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>
                <img src={item.img} alt="" />
                <div className="o-description">
                    <h5>{item.desc}</h5>
                    <a href="">{item.link} <BiChevronRight className='o-icon'/></a> 
                </div>
              </div>  
            ))
          }
      </Slider>
        </>
  )
  
}

export default FeaApartment

