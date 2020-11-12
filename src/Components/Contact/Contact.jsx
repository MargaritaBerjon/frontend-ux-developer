import React from 'react';
import './Contact.scss';
import Linkedin from '../../images/linkedin.svg';
import GitHub from '../../images/github.svg';

function Contact() {
  return (
    <>
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
      <form name="contact" method="POST" data-netlify="true" subject='porfolio'>
        <div className='form-name-email-container'>
          <input type='text' name='name' placeholder='Nombre' className='input-form' />
          <input type='text' name='email' placeholder='Email' className='input-form' />
        </div>
        <textarea name='message' placeholder='Mensaje' className='input-form text-area'></textarea>
        <button type='submit' value='Submit'>
          Enviar
        </button>
      </form>

      <div className='contact-logos'>
        <a href='https://www.linkedin.com/in/margaritaberjon/' target='_blank' rel='noopener noreferrer'>
          <img src={Linkedin} alt='Linkedin'></img>
        </a>
        <a href='https://github.com/MargaritaBerjon' target='_blank' rel='noopener noreferrer'>
          <img src={GitHub} alt='GitHub'></img>
        </a>
      </div>
    </>
  );
}

export default Contact;
