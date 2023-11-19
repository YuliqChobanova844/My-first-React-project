import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {Button} from 'react-bootstrap'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.
        sendForm(
            'service_28o19xs', 
            'template_2bq6vrj', 
            form.current, 
            'BDSOfGkl_HJ45L1z_'
            )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

return (
<div className='contact-form-section-container d-flex flex-column'>
<h1>
    <span>Имате</span>
    <br></br>
    интерес:
</h1>
<form ref ={form} onSubmit = {sendEmail}>
    <div className='email-input d-flex'>
        <input type = "email" name = 'email' placeholder='Your email'></input>
        <Button as="input" type="submit" value="Изпрати" />{'     '}
    </div>
</form>
<p>
    Свържете се с нас за да научите повече информация или 
    относно допълнителни въпроси.
</p>
</div>

)



}

export default ContactForm;