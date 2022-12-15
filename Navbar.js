import React from 'react'
import "react-bootstrap"
function Navbar() {
  return (
    <div className='collapse navbar-collapse'>
        <a className='navbar-brand' href='#'>Navbar</a>
        <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
               <a className='nav-link' href='#' >Home</a>
            </li>
            <li className='nav-item active'>
               <a className='nav-link' href='#' >about</a>
            </li>
            <li className='nav-item active'>
               <a className='nav-link' href='#' >Contact </a>
            </li>

        </ul>
      

    </div>
  )
}

export default Navbar
