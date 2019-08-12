import axios from "axios";
import { returnErrors } from "./messages";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "./types";

//Check token
export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch({ type: USER_LOADING });

  //get the token
  const token = getState().auth.token;

  //   Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  //If token, add headers
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("api/auth/user", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//lOGIN USER
export const login = (username, password) => dispatch => {
  //   Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, password });
  axios
    .post("api/auth/login", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//Logout user

export const logout = () => (dispatch, getState) => {
  //get the token
  const token = getState().auth.token;
  //   Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  //If token, add headers
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .post("api/auth/logout/", null, config)
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
