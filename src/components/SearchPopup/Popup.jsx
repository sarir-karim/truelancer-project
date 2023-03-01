import React from "react";
import "./Popup.css";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Popup = (props) => {
  const {showModel, toggleModel} = props
  return (
  <>
   {
    showModel && (
      <div className="search-container-main">

      <div className="search-modal">
        <header>
          <GrClose onClick={toggleModel} className="s-close"/>
          <p>Search Properties</p>
        </header>
  
        <nav className="search-nav">
          <Link>Buy</Link>
          <Link>Rent</Link>
          <Link>Off-plan</Link>
        </nav>
  
        <section className="location-section">
          <h3>Location</h3>
          <input type="search" placeholder="Area, development..." />
        </section>
  
        <section className="type-section">
          <h3>Type</h3>
          <div className="labels-container">
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Villa
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Apartment
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Penthouse
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Loft & Duplex
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Townhouse
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Plot
            </label>
          </div>
        </section>
  
        <section className="price-section">
          <h3>Price</h3>
          <div className="selects-container">
              <select name="" id="" className="min-price-select">
                  <option value="">Min Price</option>
                  <option value="">$100K</option>
                  <option value="">$200K</option>
                  <option value="">$300K</option>
                  <option value="">Any</option>
              </select>
              <div className="line"></div>
              <select name="" id="" className="max-price-select">
                  <option value="">Max-Price</option>
                  <option value="">$500K</option>
                  <option value="">$600K</option>
                  <option value="">$700K</option>
                  <option value="">Any</option>
              </select>
          </div>
        </section>
  
        <section className="bedrooms-section">
          <h3>Bedrooms</h3>
          <div className="bedrooms-count-container">
              <li className="number active">Any</li>
              <li className="number">1+</li>
              <li className="number">2+</li>
              <li className="number">3+</li>
              <li className="number">4+</li>
              <li className="number">5+</li>
              <li className="number">6+</li>
              <li className="number">7+</li>
          </div>
        </section>
  
        <section className="size-section">
          <h3>Price</h3>
          <div className="selects-container">
              <select name="" id="" className="min-size-select">
                  <option value="">Min Size</option>
                  <option value="">100m</option>
                  <option value="">200m</option>
                  <option value="">300m</option>
                  <option value="">Any</option>
              </select>
              <div className="line"></div>
              <select name="" id="" className="max-size-select">
                  <option value="">Max-Size</option>
                  <option value="">500m</option>
                  <option value="">600m</option>
                  <option value="">700m</option>
                  <option value="">Any</option>
              </select>
          </div>
        </section>
  
        <section className="features-section">
          <h3>Type</h3>
          <div className="labels-container">
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Balcony
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Build-in wardrobes
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Concierge service
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Covered parking
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Equipped kitchen
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Gym
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Maid service
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Maid's room
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Private garden
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Private gym
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Private jacuzzi
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Security
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Spa
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Study room
            </label>
            
          </div>
        </section>
      </div>
      </div>
    )
   }
   </>
  );
};

export default Popup;
