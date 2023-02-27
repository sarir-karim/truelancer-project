import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import './Search.css'

const Search = () => {
  return (
    <div className='search-container'>
        <label htmlFor="">
            Location <br />
            <input type="text" placeholder='Area, development...'/>
        </label>

       <div className="search-right">
        <span>Filters</span>
        <button> <AiOutlineSearch className='s-icon'/> 205 results</button>

       </div>
    </div>
  )
}

export default Search
