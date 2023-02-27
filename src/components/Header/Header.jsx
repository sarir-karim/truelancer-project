import React from 'react'
import './Header.css';
import {BiChevronDown,BiChevronUp} from 'react-icons/bi'

const Header = () => {
  return (
    <>

    <div className="header-container">

  

    <header>

        <h5>Delattio</h5>

        <ul className='n-left'>
            <li>Home</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>Rent</li>
            <li>Properties</li>
        </ul>

        <div className="n-right">
            <div className='n-drop'>
                <span>SQ.FT</span>
               <BiChevronDown className='n-down'/>
            </div>
            <div className='n-drop'>
                <span>ADE</span>
                <BiChevronDown className='n-down'/>
            </div>
            <button className='n-btn'>Sign In</button>
        </div>
    </header>

    <div className="header-text">
            <span>The address for luxury property. <br />
                Exceptional homes, unrivalled experties.
            </span>
        </div>
        </div>
    </>
  )
}

export default Header
