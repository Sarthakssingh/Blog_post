import React from 'react'
import './Body.css'

const Footer = () => {
  return (
    <div className='footer-container' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='footer-link' href='https://blogpost.com/'>
          Blogpost.com
        </a>
      </div>
  )
}

export default Footer