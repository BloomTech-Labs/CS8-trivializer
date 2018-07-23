import axios from "axios";
import jwt_decode from "jwt-decode";
import { 
  ERROR, 
  REGISTER_USER, 
  AUTH_USER, 
  UPDATING_SETTINGS, 
  UPDATE_SETTINGS,  
  FETCHING_THREE,
  FETCHED_THREE,
  SIGNING_IN,
  SIGNING_UP
  } from "./types";


export const signUp = (formProps, callback) => dispatch => {
  dispatch({ type: SIGNING_UP }); 

  axios
      .post ("http://localhost:5000/signup", //https://trivializer.herokuapp.com/signin
      formProps
      )
      .then(response => {
          dispatch({ type: AUTH_USER, payload: response.data.token })
          localStorage.setItem("token", response.data.token)
          callback();
      })
      
      .catch(error => {
          dispatch({ type: ERROR, errorMessage: 'Error signing in user'})
      });

};

export const signIn = (formProps, callback) => dispatch => {
  dispatch({ type: SIGNING_IN }); 

  axios
      .post ("http://localhost:5000/signin", //https://trivializer.herokuapp.com/signin
      formProps
      )
      .then(response => {
          dispatch({ type: AUTH_USER, payload: response.data.token })
          localStorage.setItem("token", response.data.token)
          callback();
      })
      .catch(error => {
          dispatch({ type: ERROR, errorMessage: 'Error signing in user'})
      });

};


export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
};

export const updateSettings = (formProps, callback) => dispatch => {
  const token = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  const hashedPassword = decoded.password;
  const id = decoded.sub;

  dispatch({ type: UPDATING_SETTINGS });

  axios
    .put(  "http://localhost:5000/api/user/update",{ formProps, id, hashedPassword })  //https://trivializer.herokuapp.com/settings
    .then(response => {
      dispatch({ type: UPDATE_SETTINGS, payload: response.data })
      callback();
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error updating user settings'})
  });
} 

export const getThree = () => dispatch => {
  dispatch({ type: FETCHING_THREE });

  axios
      .get('https://opentdb.com/api.php?amount=3')
      .then(response => {
          dispatch({ type: FETCHED_THREE, payload: response.data.results})
      })
      .catch(error => {
          dispatch({ type: ERROR, errorMessage: 'Error Fetching the data'})
      });

};
