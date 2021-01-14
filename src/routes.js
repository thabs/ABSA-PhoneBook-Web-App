//! Contacts
import {ContactsView, ContactCreate} from 'features/contacts';

const routes = [
  //! Contacts
  {
    path: '/contacts/view',
    name: 'Contacts',
    component: ContactsView
  },
  {
    path: '/contacts/create',
    name: 'New Contact',
    component: ContactCreate
  }
];

export default routes;
