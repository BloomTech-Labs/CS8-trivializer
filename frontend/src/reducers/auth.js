import { AUTH_USER, ERROR, SIGNING_IN, SIGNING_UP, PAYING, PAID } from '../actions/types';

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: '',
    paying: false,
    signingIn: false,
    signingUp: false,
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case SIGNING_IN:
            return { ...state, signingIn: true };
        case SIGNING_UP:
            return { ...state, signingUp: true };
        case PAYING:
            return { ...state, paying: true };
        case PAID:
            return { ...state, paying: false };
        case AUTH_USER:
            return {...state, authenticated: action.payload };
        case ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
}

