import React from 'react'
import { about } from '../portfolio'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Contact from './Contact'

const Home = () => {
  const { name, role } = about

  return (
    <>
      <div className='home-intro' id='home'>
        {name && (
          <h1>
            Hi, I&apos;m <span className="about__name">{name}.</span>
          </h1>
        )}

        {role && <h2 className='about__role'>A {role}.</h2>}
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </>
  )
}

export default Home