import React from 'react'
import { projects } from '../portfolio'
import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className='project'>
      {projects.map((projects) => (
        <div>
          <h4>{projects.name}</h4>
          <img src={projects.image} alt="test project" className='project-image' width="350"/>
          <p className='project__description'>{projects.description}</p>
          {projects.stack && (
            <ul className='project__stack'>
              {projects.stack.map((item) => (
                <li key={uniqid()} className='project__stack-item'>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {projects.sourceCode && (
            <a
              href={projects.sourceCode}
              aria-label='source code'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {projects.livePreview && (
            <a
              href={projects.livePreview}
              aria-label='live preview'
              className='link link--icon'
            >
              <LaunchIcon />
            </a>
          )}
        </div>      
      ))}
    </div>
  </div>
  )
}

export default Projects