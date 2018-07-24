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
    SIGNING_UP,
    ADDING_ROUND,
    ADDED_ROUND
} from "./types";

const config = require("../config");
const deployConfig = require("../deploy-config");

export const signUp = (formProps, callback) => dispatch => {
  dispatch({ type: SIGNING_UP }); 

  axios
      .post (deployConfig.signUpRoute, //route to sign up 
      formProps
      )
      .then(response => {
          dispatch({ type: AUTH_USER, payload: response.data.token })
          localStorage.setItem("token", response.data.token)
          callback();
      })
      
      .catch(err => {
          dispatch({ type: ERROR, errorMessage: 'Error signing in user', err})
      });

};

export const signIn = (formProps, callback) => dispatch => {
  dispatch({ type: SIGNING_IN }); 

  axios
      .post (deployConfig.signInRoute, //https://trivializer.herokuapp.com/signin
      formProps
      )
      .then(response => {
          dispatch({ type: AUTH_USER, payload: response.data.token })
          localStorage.setItem("token", response.data.token)
          callback();
      })
      .catch(err => {
          dispatch({ type: ERROR, errorMessage: 'Error signing in user', err})
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
    .put(  deployConfig.updateRoute,{ formProps, id, hashedPassword })  //https://trivializer.herokuapp.com/settings
    .then(response => {
      dispatch({ type: UPDATE_SETTINGS, payload: response.data })
      callback();
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error updating user settings', err})
  });
} 


export const addRound = round => dispatch => {
    dispatch({ type: ADDING_ROUND });
    console.log("ROUND", round);
    axios
        .post(deployConfig.createRoundRoute, round)
        .then( response => {
            dispatch({type: ADDED_ROUND, payload: response.data })
        })
        .catch(err => {
            dispatch({type: ERROR, errorMessage: "error adding round", err})
        })
}

export const getThree = formProps => dispatch => {
  dispatch({ type: FETCHING_THREE });
//   console.log("FORM PROPS", formProps);
  let questions = formProps.numberOfQuestions; 
  axios
      .get(`https://opentdb.com/api.php?amount=${questions}&category=${formProps.category}&difficulty=${formProps.difficulty}&type=${formProps.type}`)
      .then(response => {
          console.log("RESPONSE", response);
          dispatch({ type: FETCHED_THREE, payload: response.data.results})
      })
      .catch(err => {
          dispatch({ type: ERROR, errorMessage: 'Error Fetching the data', err})
      });

};
