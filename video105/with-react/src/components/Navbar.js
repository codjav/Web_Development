import React from 'react'

const Navbar = ({logoText}) => {
  return (
    <div>
      <div className="logo">{logoText}</div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTENT</li>
      </ul>
    </div>
  )
}

export default Navbar

