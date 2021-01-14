import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {useFormik} from 'formik';
import * as Yup from 'yup';
//! @material-ui
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  CircularProgress,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
// icons
import SaveIcon from '@material-ui/icons/Save';
//! styles
import {useTheme} from '@material-ui/core/styles';
import useStyles from './ContactDetails.styles';
//! components
import {ErrorHandler} from 'components';
//! Data
import {titles} from 'models';
import {dateToString} from 'utils';
//! Context
import {Context as ContactsContext} from '../state/ContactsContext';

const ContactDetails = ({contact}) => {
  //! Styles
  const classes = useStyles();
  //! Context
  const {state, updateContact, clearError} = useContext(ContactsContext);
  const {loading, error} = state;
  const {title, firstName, lastName, email, mobileNumber} = contact;

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    setFieldValue
  } = useFormik({
    initialValues: {
      title,
      firstName,
      lastName,
      email,
      mobileNumber
    },
    validationSchema,
    onSubmit: async (values) => {
      await updateContact(contact.id, values);
    }
  });

  return (
    <ErrorHandler
      title="Contact Update"
      error={error}
      onClearError={clearError}>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Card className={classes.root}>
          <CardContent>
            <FormControl className={classes.formControl}>
              <InputLabel id="title">Title</InputLabel>
              <Select
                labelId="title"
                name="title"
                id="title"
                required
                disabled={loading}
                error={touched.title && errors.title}
                value={values.title}
                onChange={handleChange}>
                {titles.map(({value, label}) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
              {errors.title && (
                <FormHelperText color="error">
                  Some important helper text
                </FormHelperText>
              )}
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="firstName"
              id="firstName"
              label="Name"
              disabled={loading}
              error={touched.firstName && errors.firstName}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              helperText={errors.firstName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="lastName"
              id="lastName"
              label="Surname"
              disabled={loading}
              error={touched.lastName && errors.lastName}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              helperText={errors.lastName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="email"
              id="email"
              label="Email"
              disabled={loading}
              error={touched.email && errors.email}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              helperText={errors.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="mobileNumber"
              id="mobileNumber"
              label="Mobile Number"
              disabled={loading}
              error={touched.mobileNumber && errors.mobileNumber}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobileNumber}
              helperText={errors.mobileNumber}
            />
            <List>
              <ListItem>
                <ListItemText
                  primary="Date Created"
                  secondary={dateToString(contact.dateTimeCreated)}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Date Updated"
                  secondary={dateToString(contact.dateTimeUpdated)}
                />
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            <div className={classes.wrapper}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
                disabled={loading}>
                Save
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </div>
          </CardActions>
        </Card>
      </form>
    </ErrorHandler>
  );
};

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  firstName: Yup.string()
    .min(2, `First name has to be at least 2 characters`)
    .required('First name is required'),
  lastName: Yup.string()
    .min(1, `Last name has to be at least 1 character`)
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  mobileNumber: Yup.string()
    .matches(
      /^((?:\+27|27)|0)(\d{2})-?(\d{3})-?(\d{4})$/,
      'Invalid mobile number\n'
    )
    .required('Mobile number is required')
});

ContactDetails.propTypes = {
  contact: PropTypes.shape({
    title: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobileNumber: PropTypes.string.isRequired
  }).isRequired
};

export default ContactDetails;
