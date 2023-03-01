import React, { useState } from 'react';
import {HiOutlineSearch} from 'react-icons/hi'
import './Search.css'
import SearchPopup from '../SearchPopup/Popup'

const Search = (props) => {
  const [showModel, setShowModel] = useState(false)

  const toggleModel = ()=>{
    setShowModel(!showModel)
  }
  return (
    <>
    <div className='search-container'>
        <label htmlFor="" className='search'>
           <span>Location</span>
            <input type="text" placeholder='Area, development...'/>
        </label>

       <div className="search-right">
        <span>Filters</span>
        <button onClick={toggleModel}> <HiOutlineSearch className='s-icon'/></button>

       </div>

    </div>
            <SearchPopup showModel={showModel} toggleModel={toggleModel}/>
          
        
       </>
  )
}

export default Search
