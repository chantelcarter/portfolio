import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
      <Nav className="nav">
        <div>Chantel Carter</div>
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
      </Nav>
    </>
  )
}

export default Header