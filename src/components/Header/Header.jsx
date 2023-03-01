import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom';

const Header = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const dropdown1Ref = useRef(null);

  // Function to handle clicks outside the dropdown container
  function handleClickOutside(event) {
    if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
      setShowDropdown1(false);
    }
  }

  // Add click event listener to the document when the component mounts
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((click) => !click);
  };
  return (
    <>
      <div className="header-container">
        <header className="header">
          <h5>Delattio</h5>

          <ul className="n-left">
            <li>Home</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>Rent</li>
            <li>Properties</li>
          </ul>

          <div className="n-right">
            <select name="" id=""className="select">
              <option value="" className="option">SQ.FT</option>
              <option value="" className="option">SQ.M</option>
            </select>
            <select name="" id=""className="select">
              <option value="" className="option">ADE</option>
              <option value="" className="option">AED</option>
            </select>

            {/* <div className="n-drop">
              <span>ADE</span>
              <BiChevronDown className="n-down" />
            </div> */}
            <button className="n-btn">Sign In</button>
          </div>
        </header>

        <header className="mob-header">
          <div className="mob-main">
            <h5>Delattio</h5>
            <FaBars className="mob-icon" onClick={handleClick} />
          </div>

          {click && (
            <div className="mob-box-main">
              <div className="mob-box">
                <GrClose className="mob-close" onClick={handleClick} />
                <ul className="mob-n-left">
                  <li>Home</li>
                  <li>Buy</li>
                  <li>Sell</li>
                  <li>Rent</li>
                  <li>Properties</li>
                </ul>

                <div className="mob-n-right">
                  <div className="mob-n-drop">
                    <span>SQ.FT</span>
                    <BiChevronDown className="mob-n-down" />
                  </div>
                  <div className="mob-n-drop">
                    <span>ADE</span>
                    <BiChevronDown className="mob-n-down" />
                  </div>
                  <button className="mob-n-btn">Sign In</button>
                </div>
              </div>
            </div>
          )}
        </header>
        <div className="header-text">
          <span>
            The address for luxury property. <br />
            Exceptional homes, unrivalled experties.
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
