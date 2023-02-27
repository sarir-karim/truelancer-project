
import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import './FeaValls.css'
import {BiChevronRight,BiChevronLeft} from 'react-icons/bi'

import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import img3 from './imgs/img3.jpg'
export const data = [
 
  {
    cover: img1,
    title: "Inception"
  },
  {
    cover: img2,
    title: "Blade Runner 2049"
  },
  {
    cover: img3,
    title: "Icon man 3"
  },
 
];

export default function FeaValls(props) {
  const ref = React.useRef();
  return (
    <div className="valls-container">
       <p>___________________________________________________________________________________________________________________________________________________________________________________</p>
       <h5 className="vall-heading">Feature Valls</h5>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = 3;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 550}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
              useGrabCursor
            />
          );
        }}
      />
      <>
        <div
          style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <BiChevronRight />
        </div>
        <div
          style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
          onClick={() => {
            ref.current?.goNext(4);
          }}
        >
          <BiChevronLeft />
        </div>
      </>
    </div>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div className="valls-main">
     
      <div className="valls-images">
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "fill",
          borderRadius: 0
        }}
        className="vall-img"
        draggable={false}
        src={cover}
      />

      <div className="overlay-main">
        <div>
          <h5>Jumeirah </h5>
        </div>
        <div>
          <h5>100,00,000 AED </h5>
        </div>
      </div>
    </div>
    </div>
  );
});
