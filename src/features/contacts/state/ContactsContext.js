import {API, createDataContext} from 'utils';
//! Types
import {
  FETCH_ALL_CONTACTS,
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CLEAR_ERROR
} from './ContactsTypes';
//! Reducer
import {contactsReducer, INITIAL_STATE} from './ContactsReducer';

const fetchAllContacts = (dispatch) => async () => {
  try {
    dispatch({type: FETCH_ALL_CONTACTS.PENDING});
    const res = await API.get('/all');
    dispatch({type: FETCH_ALL_CONTACTS.SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({
      type: FETCH_ALL_CONTACTS.FAILURE,
      payload: error
    });
  }
};

const createContact = (dispatch) => async ({
  title,
  firstName,
  lastName,
  email,
  mobileNumber
}) => {
  try {
    dispatch({type: CREATE_CONTACT.PENDING});
    const res = await API.post('/create', {
      title,
      firstName,
      lastName,
      email,
      mobileNumber
    });
    dispatch({type: CREATE_CONTACT.SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({
      type: CREATE_CONTACT.FAILURE,
      payload: error
    });
  }
};

const updateContact = (dispatch) => async (
  contactId,
  {title, firstName, lastName, email, mobileNumber}
) => {
  try {
    dispatch({type: UPDATE_CONTACT.PENDING});
    const res = await API.put(`/update?id=${contactId}`, {
      title,
      firstName,
      lastName,
      email,
      mobileNumber
    });
    dispatch({type: UPDATE_CONTACT.SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({
      type: UPDATE_CONTACT.FAILURE,
      payload: error
    });
  }
};

const deleteContact = (dispatch) => async (contactId) => {
  try {
    dispatch({type: DELETE_CONTACT.PENDING});
    const res = await API.post(`/delete?id=${contactId}`);
    dispatch({type: DELETE_CONTACT.SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({
      type: DELETE_CONTACT.FAILURE,
      payload: error
    });
  }
};

const clearError = (dispatch) => () => {
  dispatch({type: CLEAR_ERROR});
};

export const {Provider, Context} = createDataContext(
  contactsReducer,
  {
    fetchAllContacts,
    createContact,
    updateContact,
    deleteContact,
    clearError
  },
  INITIAL_STATE
);
