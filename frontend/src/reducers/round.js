import { FETCHING_THREE, FETCHED_THREE, ERROR } from '../actions/types';

const INITIAL_STATE = {
    round: null,
    errorMessage: '',
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case FETCHED_THREE:
            return {...state, round: action.payload  };
        case ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
}