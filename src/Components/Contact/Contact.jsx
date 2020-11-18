import React , { useState }  from 'react';
import './Contact.scss';
import Linkedin from '../../images/linkedin.svg';
import GitHub from '../../images/github.svg';

function Contact() {
  const [form, setForm] =
  useState({
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
  });
const [inputRequired, setInputRequired] = useState({name:'',email:'',message:''});
const [disable, setDisable] = useState(true);



  function handleChange(ev) {
    setDisable(ev.target.value === '');
    setForm(ev.target.value)
    const name = ev.target.name;
    const value = ev.target.value;
    setInputRequired(old=> {
      let newValue = Object.assign({},old)
      newValue[name] = value.length ? '' : 'input-required '
      return newValue
    })
  }


 

  return (
    <>
      <form action='https://formspree.io/f/mnqozngk' method='POST' className='form-container' onChange={handleChange} >
        <div className='form-name-email-container'>
          <input type='text' name='name' placeholder={form.name} className={inputRequired.name ? inputRequired.name+'input-form' : 'input-form'} required/>
          <input type='text' name='email' placeholder='Email' className={inputRequired.name ? inputRequired.name+'input-form' : 'input-form'} required />
        </div>
        <textarea name='message' placeholder='Mensaje' className={inputRequired.message ? inputRequired.message+'input-form text-area' : 'input-form text-area'} required></textarea>
        <button disabled={disable} type='submit' value='Submit'>
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
