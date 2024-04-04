import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
      <Nav className="nav">
        <div className='header-text'>****Under Construction****</div>
        <div className='nav-links'>
          <NavItem>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </NavItem>
          <NavItem>
          <NavLink to="/about" className="nav-link">About Me</NavLink>
        </NavItem>
            <NavItem>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
          </NavItem>
        </div>
      </Nav>
    </>
  )
}

export default Header