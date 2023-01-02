import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactForm = ({ add }) => {

   const nameRef = useRef('');
   const emailRef = useRef('');
   const phoneRef = useRef('');
   //const conectedRef = useRef('');

   const addContact = (e) => {
      e.preventDefault();
      const newContact = new Contact(
         nameRef.current.value,
         emailRef.current.value,
         phoneRef.current.value,
         //conectedRef.current.value
         true
         //si creo el contacto debe estar Conected
      );
      add(newContact);
   }


   return (
      <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
         <div className='form-outline flex-fill'>
            <input
               ref={nameRef}
               type="text"
               placeholder='Full Name..'
               id='inputName'
               required
               autoFocus
            />
            <input
               ref={emailRef}
               type="text"
               placeholder='Email..'
               id='inputEmail'
               required
            />
            <input
               ref={phoneRef}
               type="text"
               placeholder='Number Phone..'
               id='inputPhone'
               required
            />

            {/* <label htmlFor="selectedConection" className='sr-only'>
               Conected
            </label>

            <select ref={conectedRef} defaultValue={true} id="selectedConection" className='ms-2 p-1 form-select-sm'>
               <option value={true} >
                  Conected
               </option>
               <option value={false} >
                  Disconected
               </option>
            </select> */}

            <button type='submit' className='btn btn-success btn-md ms-2'>
               ADD
            </button>
         </div>
      </form>
   );
}

ContactForm.propTypes = {
   add: PropTypes.func.isRequired
}

export default ContactForm;
