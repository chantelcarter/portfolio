import { useState } from 'react'
import { projects, skills, contact } from '../portfolio'
// import { Nav, NavItem } from "reactstrap"
// import { NavLink } from "react-router-dom"

const Header = () => {
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <div className='header-container'>
      <header>
      <nav className='center nav'>
      <div>*** Under Construction ***</div>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav-list'
      >
        <li className='nav__list-item'>
        <a
              href='#home'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Home
            </a>
        </li>
        {projects.length ? (
          <li className='nav-link-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact Me
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
    </header>
    </div>
  )
}

export default Header