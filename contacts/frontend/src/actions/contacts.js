import axios from "axios";
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";
import { createMessage, returnErrors } from "./messages";

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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//Delete a contact by provinding an ID
export const deleteContact = id => dispatch => {
  axios
    .delete(`/api/contacts/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteContact: "Contact deleted succesfuly" }));
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
      dispatch(createMessage({ addContact: "Contact added succesfuly" }));
      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
