import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8x5r8pb', 'template_11rwjt8', form.current, {
        publicKey: 'zBpArHREGzMi9EFOT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <h2 className='title'>Send me an email</h2>
      <br />
      <div className='form-container'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='input-group'>
            <input 
            type="text"
            name="user_name"
            placeholder='Name'
            className='form-input'
          />
          <input 
            type="email"
            name="user_email"
            placeholder='Email'
            className='form-input'
          />
          </div>
          <textarea
            name="message"
            placeholder='Message'
            className='form-input'
          />
          <br />
          <input type="submit" value="Send" />
          {emailSent && <p>Email sent successfully!</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact