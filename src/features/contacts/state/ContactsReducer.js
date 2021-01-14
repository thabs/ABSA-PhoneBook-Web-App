import {
  FETCH_ALL_CONTACTS,
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CLEAR_ERROR
} from './ContactsTypes';

const INITIAL_STATE = {
  loading: false,
  error: null,
  contacts: []
};

const contactsReducer = (state, action) => {
  switch (action.type) {
    //! Pending
    case CREATE_CONTACT.PENDING:
    case UPDATE_CONTACT.PENDING:
    case DELETE_CONTACT.PENDING:
      return {...state, loading: true};
    case FETCH_ALL_CONTACTS.PENDING:
      return {...state, loading: true, contacts: []};
    //! Success
    case CREATE_CONTACT.SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: [...state.contacts, action.payload]
      };
    case FETCH_ALL_CONTACTS.SUCCESS:
      return {...state, loading: false, contacts: action.payload};
    case UPDATE_CONTACT.SUCCESS:
      const contacts = state.contacts.map((item) => {
        if (item.id !== action.payload.id) return item;
        return {...item, ...action.payload};
      });

      return {
        ...state,
        loading: false,
        contacts
      };
    case DELETE_CONTACT.SUCCESS:
      const activeContacts = state.contacts.filter(
        (item) => item.id !== action.payload.id
      );
      return {...state, loading: false, contacts: activeContacts};
    //! Failure
    case CREATE_CONTACT.FAILURE:
    case UPDATE_CONTACT.FAILURE:
    case FETCH_ALL_CONTACTS.FAILURE:
    case DELETE_CONTACT.FAILURE:
      return {...state, loading: false, error: action.payload};
    case CLEAR_ERROR:
      return {...state, error: null};
    default:
      return state;
  }
};

export {contactsReducer, INITIAL_STATE};
