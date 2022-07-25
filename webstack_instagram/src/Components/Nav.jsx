import React from 'react'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import instagram from  "../assets/instagram.png"


function Nav() {
const [search, setSearch] = useState(true)
  return (
    <div className='Nav-wrapper'>
        <div className='Nav-inner_items'>
            <div className='logo'>
                <img src={instagram} alt='instagram'/>
            </div>
            <div className='Nav-search'>
                { search && <BsSearch className='nav-search-icon'/>}
                <input onClick={() => {setSearch(false)}} className='search-text' type='text' placeholder='Search'/>
            </div>
            <div className='Nav-Icons'>
                <span>Home</span>
                <span>Profile</span>
            </div>
        </div>
      
    </div>
  )
}

export default Nav