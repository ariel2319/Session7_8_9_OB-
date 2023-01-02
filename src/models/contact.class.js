
export class Contact {
   name = '';
   email = '';
   phone = '';
   conected = false;

   constructor (name, email, phone, conected) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.conected = conected
   }
}