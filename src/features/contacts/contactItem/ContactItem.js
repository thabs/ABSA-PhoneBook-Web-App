import React, {useState} from 'react';
import PropTypes from 'prop-types';
// @material-ui/core
import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow
} from '@material-ui/core';
// icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
//! styles
import useStyles from './ContactItem.styles';
//! components
import ContactDetails from '../contactDetails/ContactDetails';

const ContactItem = ({contact}) => {
  // Styles
  const classes = useStyles();
  // States
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {contact.title}
        </TableCell>
        <TableCell>{contact.firstName}</TableCell>
        <TableCell>{contact.lastName}</TableCell>
        <TableCell>{contact.email}</TableCell>
        <TableCell>{contact.mobileNumber}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <ContactDetails contact={contact} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    title: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobileNumber: PropTypes.string.isRequired
  }).isRequired
};

export default ContactItem;
