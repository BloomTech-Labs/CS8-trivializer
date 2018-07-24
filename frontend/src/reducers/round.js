import { FETCHING_THREE, FETCHED_THREE, ERROR, ADDING_ROUND, ADDED_ROUND } from '../actions/types';

const INITIAL_STATE = {
    round: [],
    addingRound: false,
    fetchingRound: false,
    errorMessage: '',
};

export default function(state=INITIAL_STATE, action) {
    // console.log("STATE", state);
    switch(action.type) {
        case ADDING_ROUND:
            return { ...state, addingRound: true };
        case ADDED_ROUND:
            return { ...state, round: action.payload };
        case FETCHING_THREE:
            return { ...state, fetchingRound: true };
        case FETCHED_THREE:
            return {...state, round: action.payload  };
        case ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
}