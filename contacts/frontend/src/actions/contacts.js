import axios from "axios";
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_ERRORS } from "./types";
import { createMessage } from "./messages";

//Get all contacts from the server...
export const getContacts = () => dispatch => {
  axios
    .get("/api/contacts/")
    .then(res => {
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//Delete a contact by provinding an ID
export const deleteContact = id => dispatch => {
  axios
    .delete(`/api/contacts/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteContact: 'Contact deleted succesfuly' }));
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//Add contact to the database
export const addContact = contact => dispatch => {
  axios
    .post("/api/contacts/", contact)
    .then(res => {
      dispatch(createMessage({ addContact: 'Contact added succesfuly' }));
      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
