import axios from "axios";
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";

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
    .post('/api/contacts/', contact)
    .then(res => {
      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
