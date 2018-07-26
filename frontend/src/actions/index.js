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
    ADDED_ROUND,
    FETCHING_ROUND,
    FETCHED_ROUND,
    CREATING_GAME,
    CREATED_GAME,
    FETCHING_GAMES, 
    FETCHED_GAMES

  } from "./types";

// axios.defaults.withCredentials = true;
export const signUp = (formProps, callback) => dispatch => {
  dispatch({ type: SIGNING_UP }); 

  axios
      .post ("http://localhost:5000/signup", //MUST be http for localhost: not https
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
      .post ("http://localhost:5000/signin", //https://trivializer.herokuapp.com/signin
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

export const getRounds = gameId => dispatch => {
    dispatch({ type: FETCHING_ROUND });
    
    axios
        .get('http://localhost:5000/api/round/get')
        .then( response => {
            dispatch({type: FETCHED_ROUND, payload: {gameId: gameId, rounds:response.data} })

        })
        .catch(err => {
            dispatch({type: ERROR, errorMessage: "error adding round", err})
        })
}

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
      dispatch({ type: ERROR, errorMessage: 'Error updating user settings', err})
  });
} 


export const addRound = (gameId, round) => dispatch => {
    dispatch({ type: ADDING_ROUND });
    console.log("ACTION ROUND", round)
    axios
        .post('http://localhost:5000/api/round/create-round', {gameId, round})
        .then( response => {
            dispatch({type: ADDED_ROUND, payload: response.data })
        })
        .catch(err => {
            dispatch({type: ERROR, errorMessage: "error adding round", err})
        })
}

export const getThree = formProps => dispatch => {
  dispatch({ type: FETCHING_THREE });
  let questions = formProps.numberOfQuestions; 
  let { roundName, numberOfQuestions, category, difficulty, type } = formProps;
  axios
      .get(`https://opentdb.com/api.php?amount=${questions}&category=${formProps.category}&difficulty=${formProps.difficulty}&type=${formProps.type}`)
      .then(response => {
          dispatch({ type: FETCHED_THREE, payload: { roundName, numberOfQuestions, category, difficulty, type, questions: response.data.results }})
      })
      .catch(err => {
          dispatch({ type: ERROR, errorMessage: 'Error Fetching the data', err})
      });

};




export const createGame = userId => dispatch => {
    dispatch({ type: CREATING_GAME });

    axios
        .post('http://localhost:5000/api/game/create-game', {userId})
        .then(response => {
            console.log("CREATEGAME ID", userId)
            dispatch({ type: CREATED_GAME, payload: response.data});
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error creating game'});
        });
};

export const getGames = userId => dispatch => {
    dispatch({ type: FETCHING_GAMES });
        
    axios
        .get('http://localhost:5000/api/game/get')
        .then(response => {
            console.log("getgames action",response)
            dispatch({ type: FETCHED_GAMES, payload: { userId: userId, games:response.data }});
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error fetching stored games array'});
        });

}