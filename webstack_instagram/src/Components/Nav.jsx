import React from 'react'
import instagram from  "../assets/instagram.png"
function Nav() {
  return (
    <div className='Nav-wrapper'>
        <div className='logo'>
            <img src={instagram} alt='instagram'/>
        </div>
        <div className='Nav-search'>
           
            <input type='text' placeholder='Search'/>
        </div>
        <div className='Nav-Icons'>
            
        </div>
    </div>
  )
}

export default Nav