import React from 'react'
import { NavLink } from 'react-router-dom'


const navbar = () => {

  return (
    <div className='k'>
      <nav>
        <NavLink className={(e)=>{return e.isActive? "red":""}} to="/home"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive? "red":""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive? "red":""}} to="/contacts"><li>Contacts</li></NavLink>
      </nav>
    </div>
  )
}

export default navbar
