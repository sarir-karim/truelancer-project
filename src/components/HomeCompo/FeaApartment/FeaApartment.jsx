import React from 'react'
import './FeaApartment.css'
import {BiChevronRight} from 'react-icons/bi'

import img1 from './images/img1.avif'
import img2 from './images/img2.avif'
import img3 from './images/img3.avif'


const FeaApartment = () => {
  return (
    <div className='feature-container'>
        <p>___________________________________________________________________________________________________________________________________________________________________________________</p>
        <h5 className='f-heading'>Feature Apartment</h5>

        <div className="feature-cards">
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
        </div>
        
    </div>
  )
}

export default FeaApartment
