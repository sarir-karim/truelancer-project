import React from 'react'
import './Journel.css'
import img1 from './imgs/img1.jpg'
const Journel = () => {
    return (
        <div className='journel-container'>
             <p>___________________________________________________________________________________________________________________________________________________________________________________</p>
        <h5 className='journel-heading'>From the Journel</h5>
        <div className="j-main">
            <div className="j-slider">
           <img src={img1} alt="" />
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

export default Journel
