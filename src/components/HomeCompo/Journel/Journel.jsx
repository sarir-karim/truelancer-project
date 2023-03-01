import React,{ useState, useEffect} from 'react'
import './Journel.css'
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import img3 from './imgs/img3.jpg'

import {
    StackedCarousel,
    ResponsiveContainer
  } from "react-stacked-center-carousel";

  export const data = [
 
    {
        id:1,
      
      cover: img1,
      title: "Inception"
    },
    {
        id:2,
      cover: img2,
      title: "Blade Runner 2049"
    },
    {
        id:3,
      cover: img3,
      title: "Icon man 3"
    },
   
  ];
const Journel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
let intervalId;
const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  useEffect(() => {
    intervalId = setInterval(() => {
      nextSlide();
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);
  
    const ref = React.useRef();
    return (
        <div className='journel-container'>
          <article></article>
        <h5 className='journel-heading'>From the Journel</h5>
        <div className="j-main">
            <div className="j-slider">

            <ResponsiveContainer className="j-slide"
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 3;
          if (parentWidth <= 1024) currentVisibleSlide = 3;
          if (parentWidth <= 500) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={ 200 }
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
              useGrabCursor
              activeIndex={currentSlide}
              onIndexChange={setCurrentSlide}
            />
          );
        }}
      />
           
            </div>

            <div className="j-right">
                <div className="r-heading">
                    Dubai is yours.
                </div>
                <div className="r-para">
                    This city is global socio-economic mainstay, The core strength of Dubai are the people, places, and experiences we come to share. These cornerstones of society come together to sustain a city that has become one of the fastest-growing economies of the planet <br />

                    Essentially it's our home-and where our hearts will always be.
                </div>

                <div className="r-footer">
                    <div className="left">
                        <div>
                            The LIFESTYLE
                        </div>
                        <div>
                            Read More
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            Feburary 22, 2023
                        </div>
                        <div>
                           7 MIN, READ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export const Card = React.memo(function (props) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];
    return (
      <div className="j-main">
       
        <div className="j-images">
        <img
          style={{
            height: "100%",
            width: "60vh",
            objectFit: "fill",
            borderRadius: 0
          }}
          className="j-img"
          draggable={false}
          src={cover}
        />
      </div>
      </div>
    );
  });

export default Journel
