import React from 'react'
import { about } from '../portfolio'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const About = () => {
  const {description, resume, social } = about

  return (
    <div className='about center'>
      <h2 className='title'>About Me</h2>
      <p className='about__desc'>{description && description}</p>
      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About