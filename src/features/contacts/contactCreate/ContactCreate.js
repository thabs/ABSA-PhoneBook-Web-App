import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
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
  Typography
} from '@material-ui/core';
// icons
import PersonAdd from '@material-ui/icons/PersonAdd';
//! styles
import useStyles from './ContactCreate.styles';
//! components
import {ErrorHandler} from 'components';
//! Data
import {titles} from 'models';
//! Context
import {Context as ContactsContext} from '../state/ContactsContext';

const ContactCreate = () => {
  //! Navigation
  let history = useHistory();
  //! Styles
  const classes = useStyles();
  //! Context
  const {state, createContact, clearError} = useContext(ContactsContext);
  const {loading, error} = state;

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormik({
    initialValues: {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      await createContact(values);
      if (!error) history.push('/');
    }
  });

  return (
    <ErrorHandler
      title="Contact Create"
      error={error}
      onClearError={clearError}>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              New Contact
            </Typography>
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
                <FormHelperText error={true}>{errors.title}</FormHelperText>
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
          </CardContent>
          <CardActions>
            <div className={classes.wrapper}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<PersonAdd />}
                disabled={loading}>
                Add
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

export default ContactCreate;
