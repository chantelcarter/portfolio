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
      <div className='form-container'>
        <h2 className='title' id='contact'>Send me an email</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className='form-row'>
            <div className='row-item-name'>
              <input 
                type="text"
                name="from_name"
                placeholder='Name'
                className='form-input'
              />
            </div>
            <div className='row-item-email'>
              <input 
                type="email"
                name="reply_to"
                placeholder='Email'
                className='form-input'
              />
            </div>
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