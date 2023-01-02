import React, { useEffect, useState } from 'react';
import { Contact } from '../models/contact.class'
import ContactComponent from './Contact';
import ContactForm from './forms/Contact_Form';


const ContactList = () => {

   const defContact1 = new Contact('Ariel Maldonado', 'ariel@yahoo.com.ar', '2621236332', true);
   const defContact2 = new Contact('Alejandro Sanchez', 'alejandro@gmail.com', '23652348172', false)

   const [contacts, setContacts] = useState([defContact1, defContact2]);
   //const [loading, setLoading] = useState(true);

   /* useEffect(() => {
      setLoading(false);
   }, [contacts]) */


   const conectedContact = (contact) => {
      const index = contacts.indexOf(contact);
      const tempContacts = [...contacts]
      tempContacts[index].conected = !tempContacts[index].conected;
      setContacts(tempContacts);
   }

   const removeContact = (contact) => {
      const index = contacts.indexOf(contact);
      const tempContacts = [...contacts];
      tempContacts.splice(index, 1);
      setContacts(tempContacts)
   }

   const addContact = (contact) => {
      const tempContacts = [...contacts];
      tempContacts.push(contact);
      setContacts(tempContacts);
   }

   return (
      <div>
         <h1> Contact List Component</h1>
         <div className='col-15'>
            <div className='card'>
               {/* Title */}
               <div className='card.header p-3'>
                  <h3 style={{ fontWeight: '700' }}>
                     My Contacts
                  </h3>
               </div>

               {/* Content */}
               <div className='card-body'>
                  <table>
                     {/* Head of content TABLE */}
                     <thead>
                        <tr>
                           <th scope='col' className='col-2'> Conected  </th>
                           <th scope='col' className='col-4'> Name </th>
                           <th scope='col' className='col-4'> E-Mail </th>
                           <th scope='col' className='col-4'> Phone </th>
                           <th scope='col' className='col-2'> Delete </th>
                        </tr>
                     </thead>

                     {/* Content of content TABLE */}
                     <tbody>
                        {
                           contacts.map((contact, index) => {
                              return (
                                 <ContactComponent
                                    key={index}
                                    contact={contact}
                                    conected={conectedContact}
                                    remove={removeContact}
                                 />
                              )
                           })
                        }

                     </tbody>
                  </table>

               </div>
            </div>

            <ContactForm
               add={addContact}
               conected={conectedContact}
            />
         </div>


      </div>
   );
}

export default ContactList;
