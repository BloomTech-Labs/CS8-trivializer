import axios from 'axios';
import {ERROR, REGISTER_USER, AUTH_USER} from './types';

export const signUp = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            'https://trivializer.herokuapp.com/signup', 
            formProps
        );

        dispatch({ type: AUTH_USER, payload: response.data.token});
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(err){
        dispatch({type: ERROR, payload: 'email in use'})
    }
}
