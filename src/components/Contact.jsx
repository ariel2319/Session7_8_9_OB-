import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';



const ContactComponent = ({ contact, conected, remove }) => {

   const contactConected = () => {
      if (contact.conected) {
         return (<i onClick={() => conected(contact)} className='bi bi-emoji-smile task-action' style={{ color: 'green', fontWeight: 'bold', fontSize: '35px' }}> </i>

         )
      } else {
         return (<i onClick={() => conected(contact)} className='bi bi-emoji-frown task-action' style={{ color: 'crimson', fontWeight: 'bold', fontSize: '35px' }}  > </i>

         )
      }
   }


   return (
      <tr className='fw-normal align-left'>
         <th>
            <span className='ms-2'>
               {/* {String(contact.conected)} */}
               {contactConected()}
            </span>
         </th>
         <td>
            <span>
               {contact.name}
            </span>
         </td>
         <td>
            <span>
               {contact.email}
            </span>
         </td>
         <td>
            <span>
               {contact.phone}
            </span>
         </td>
         <td>
            <span>
               <i onClick={() => remove(contact)} className='bi bi-x-square task-action' style={{ fontSize: '30px', color: 'crimson' }}> </i>
            </span>
         </td>
      </tr>
   );
}

ContactComponent.propTypes = {
   contact: PropTypes.instanceOf(Contact).isRequired,
   conected: PropTypes.func.isRequired,
   remove: PropTypes.func.isRequired
}

export default ContactComponent;
