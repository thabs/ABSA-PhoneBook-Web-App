import React, {useContext, useEffect} from 'react';
// @material-ui/core
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
// features
import ContactItem from '../contactItem/ContactItem';
// context
import {Context as ContactsContext} from '../state/ContactsContext';
// components
import {ErrorHandler} from 'components';

const ContactsView = () => {
  //! Context
  const {state, fetchAllContacts, clearError} = useContext(ContactsContext);
  const {contacts, error} = state;

  useEffect(() => {
    if (!contacts.length) {
      fetchAllContacts();
    }
  }, []);

  return (
    <ErrorHandler title="Contacts" error={error} onClearError={clearError}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((row) => (
              <ContactItem key={row.name} contact={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ErrorHandler>
  );
};

export default ContactsView;
