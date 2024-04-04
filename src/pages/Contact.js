import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8x5r8pb', 'template_11rwjt8', form.current, {
        publicKey: 'zBpArHREGzMi9EFOT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <h2 className='title'>Contact</h2>
      <div className='form-container'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <br />
          <label>Email</label>
          <input type="email" name="user_email" />
          <br />
          <label>Message</label>
          <textarea name="message" />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact