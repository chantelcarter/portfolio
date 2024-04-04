import React from 'react'
import { skills } from '../portfolio'
import uniqid from 'uniqid'

const Skills = () => {
    if (!skills.length) return null

  return (
    <div className='section skills' id='skills'>
      <h2 className='title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills