import { ERROR, CREATING_GAME, CREATED_GAME, FETCHED_GAMES, FETCHING_GAMES } from '../actions/types';

const INITIAL_STATE = {
     storedGames: [],
     fetchingGames: false,
     creatingGame: false,
    errorMessage: ''
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case FETCHING_GAMES:
            return {...state, fetchingGames: true };
        case FETCHED_GAMES:
            return {...state, storedGames: action.payload.games.filter(game => game.userId === action.payload.userId )  };
        case CREATING_GAME:
            return {...state, creatingGame: true };
        // case CREATED_GAME:
        //     return {...state, createdGames: [...state.createdGames, action.payload] };
        case ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
}