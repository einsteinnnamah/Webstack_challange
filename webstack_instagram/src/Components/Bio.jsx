import React from 'react'
import profileIcon from "../assets/profileIcon.svg"

const Bio = () => {
  const Bio_stats = {
    followers: '1.5M',
    following: '1.5M',
    posts: '1.5M'
  }

  const editForm = (
    <form className='edit-bio-form'>
      <div className='username'>
        <label htmlFor="">Username</label>
        <input type="text" name="" id="" placeholder='Enter your Username' />
      </div>
     
      <input type="text" name="" id="" placeholder='About you' />
    </form>
  )
    


  return (
    <div className='Bio_wrapper'>
      <div className='Profile_intro'>
        <div className='Profile_image'>
          <img src={profileIcon} alt="Einstein Pics" />
        </div>
        <div className='Profile_text'>
          <div className='Profile_text_header'>
            <h1>Chibuezennamah</h1>
            <div className='Profile_text_header_btn'>
              <button className='edit_btn'>Edit Profile</button>
              {editForm}
            </div>
          
          </div>
          <div className='Bio_stats'>
            <p><strong>{Bio_stats.posts}</strong>  posts </p>
            <p><strong>{Bio_stats.followers}</strong> followers </p>
            <p><strong>{Bio_stats.following}</strong> following </p>
          </div>
          <div>
            <p>Chibueze Nnamah</p>
            <p className='Content'>Digital Creator</p>
            <p>Front end Developer & Interface Designer</p>
            <p>wwwe</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Bio