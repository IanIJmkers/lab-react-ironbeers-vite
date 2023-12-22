import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../assets/home-icon.png'

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <div className='bg-gray-600 py-4 px-10'>
            <img src={homeIcon} alt='' />
        </div>
      </Link>
    </div>
  )
}

