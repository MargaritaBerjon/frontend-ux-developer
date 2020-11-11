import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <form action='https://formspree.io/f/mnqozngk' method='POST' className='form-container'>
      <div className='form-name-email-container'>
        <input type='text' name='name' placeholder='Nombre' className='input-form' />
        <input type='text' name='email' placeholder='Email' className='input-form' />
      </div>
      <textarea name='message' placeholder='Mensaje' className='input-form text-area'></textarea>
      <button type='submit' value='Submit'>
        Enviar
      </button>
    </form>
  );
}

export default Contact;
