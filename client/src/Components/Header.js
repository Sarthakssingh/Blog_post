import React from 'react'
import { Link } from 'react-router-dom'
import './Body.css'

const Header = () => {
  return (
    <nav className='header-nav'>
      <div className='header-logo-container'>
      <img
            className="logo-heading"
            src="https://blogsspreadspot.com/wp-content/uploads/2021/11/blog.jpg"
            alt="login website logo"
          />
      </div>
                <ul className='header-list'>
                    <li className='header-li'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='header-li'>
                        <Link to="/login">Logout</Link>
                    </li>
                </ul>
            </nav>
  )
}

export default Header
