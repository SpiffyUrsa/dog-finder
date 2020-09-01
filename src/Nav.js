import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

/**NavBar - Always displayed on page
 * 
 * Props:
 * -names [whiskey, tubby, etc...]
 * 
 * State:
 * -None
 * 
 * App -> BrowserRouter -> Nav
 */
function Nav({ names }) {

  const nameLinks = names.map(name => (
    <NavLink
      exact to={`/dogs/${name}`}
      key={name}
      className='Nav-NavLink'
    >
      {name}
    </NavLink>
  ))
  return (
    <nav className='Nav'>
      <NavLink exact to='/dogs' className='Nav-NavLink'>Dogs</NavLink>
      {nameLinks}
    </nav>
  )
}

export default Nav;