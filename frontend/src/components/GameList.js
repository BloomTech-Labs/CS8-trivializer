import React, { Component } from 'react';
import { GameWrapper, ListWrapper } from './primitives/GameList';
import requireAuth from '../hoc/requireAuth';

import { connect } from 'react-redux';
import { compose } from 'react';
import { createGame, getGames } from '../actions';

import GameCard from './GameCard';

import jwt_decode from "jwt-decode";

class GameList extends Component {
 
    componentDidMount() {
        this.props.getGames();
        
    }

    

    createGameHandler = (userId) => {
        this.props.createGame(userId)
      }  


    homeRouteClick = () => {
        this.props.history.push("/");
      };

    render() {
        
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const userId = decoded.sub;
        
        let list =  this.props.storedGames.map((g, i) => { 
            return (
                <GameCard key={g._id} id={g._id} created={g.createdAt} />
                
            )
        });
        
    
    
        return(
            <GameWrapper>
                <h1 onClick={()=> this.createGameHandler(userId)}>ADD NEW GAME</h1>
                <h1>WELCOME TO THE GAME ZONE KID!!!!!!!!!</h1>
                <button onClick={this.homeRouteClick}></button>

                <ListWrapper>
                {list}
                </ListWrapper>
                {console.log("STORED ID", userId)}
                {console.log("STORED GAMES", this.props.storedGames)}
            </GameWrapper>
        )
    }
}

function mapStateToProps(state) {
    return { 
        storedGames: state.game.storedGames,  
        erorrMessage: state.auth.erorrMessage 
    };
  }
  
//   export default compose(
//     connect(
//       mapStateToProps,
//       { getRounds }
//     ),
   
//   )(requireAuth(GameList));

  export default connect(mapStateToProps, { createGame, getGames })(GameList);

// export default requireAuth(GameList); 