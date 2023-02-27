import React from 'react'
import './Ofplan.css'
import {BiChevronRight} from 'react-icons/bi'

import img1 from './images/img1.avif'
import img2 from './images/img2.avif'
import img3 from './images/img3.avif'


const FeaApartment = () => {
  return (
    <div className='plane-container'>
        <p>___________________________________________________________________________________________________________________________________________________________________________________</p>
        <h5 className='p-heading'>Off-plan Properties</h5>

        <div className="plane-cards">
            <div className="p-card">
                <img src={img1} alt="" />
                <div className="p-description">
                    <h5>Business Bay</h5>
                    <a href="">Learn More <BiChevronRight className='p-icon'/></a> 
                </div>
            </div>
            <div className="p-card">
                <img src={img2} alt="" />
                <div className="p-description">
                    <h5>Business Bay</h5>
                    <a href="">Learn More <BiChevronRight className='p-icon'/></a> 
                </div>
            </div>
            <div className="p-card">
                <img src={img3} alt="" />
                <div className="p-description">
                    <h5>AVA at palm jumeirah</h5>
                    <a href="">Learn More <BiChevronRight className='p-icon'/></a> 
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FeaApartment
