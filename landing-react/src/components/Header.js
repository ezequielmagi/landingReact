import React from 'react'
import './header.css'
import { Searching } from './Searching'

export const Header = () => {
  return (
    <div className='header'>
      <div className="header--container">
        <h1>Logo</h1>
        <nav className='header--nav'>
          <ul>
            <li><Searching/></li>
            <li>Home</li>
            <li>Login or Register</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
