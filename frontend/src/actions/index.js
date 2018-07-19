import axios from "axios";
import jwt_decode from "jwt-decode";
import { ERROR, REGISTER_USER, AUTH_USER, UPDATING_SETTINGS, UPDATE_SETTINGS  } from "./types";

export const signUp = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:5000/signup", // https://trivializer.herokuapp.com/signup
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (err) {
    dispatch({ type: ERROR, payload: "email in use" });
  }
};

export const signIn = (formProps, callback) => async dispatch => {
  // const token = localStorage.getItem('token');
  // const decoded = jwt_decode(token);
  // const password = decoded.password;
  // console.log("VERY SECURE PASSWORD", password);
  try {
    const response = await axios.post(
      "http://localhost:5000/signin", //https://trivializer.herokuapp.com/signin
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (err) {
    dispatch({ type: ERROR, payload: "user not found" });
  }
};

export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
};


export const updateSettings = (formProps, callback) => async dispatch => {
  const token = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  const hashedPassword = decoded.password;
  const id = decoded.sub;

  try {
    const response = await axios.put(
      "http://localhost:5000/api/user/update", //https://trivializer.herokuapp.com/settings
      {formProps, id, hashedPassword}
    );
    dispatch({type: UPDATING_SETTINGS })
    dispatch({type: UPDATE_SETTINGS, payload: response.data })
    callback();
  } catch(err){
    dispatch({type: ERROR, payload: "failed to update user settings"});
  }
};
