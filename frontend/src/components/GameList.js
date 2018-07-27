import React, { Component } from 'react';

import { GameWrapper, ListWrapper, Button, ButtonWrapper } from './primitives/GameList';
import { Nav, Link } from './primitives/Nav';

import requireAuth from '../hoc/requireAuth';

import { connect } from 'react-redux';
import { compose } from 'react';
import { addGame, getGames } from '../actions';
import { withRouter } from 'react-router';


import GameCard from './GameCard';

import jwt_decode from "jwt-decode";

class GameList extends Component {
 
    componentDidMount() {
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const userId = decoded.sub;

        this.props.getGames(userId);
        console.log("GAMES CDM", this.props.storedGames)
        
        
    }

    addGameHandler = userId  => {
        this.props.addGame( userId, (id) => {
          this.props.history.push(`/create-game/${id}`);
        });
      };
   

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
                <Nav>
                    <Link onClick={()=> this.props.history.push('/settings')}>Settings</Link>
                    <Link onClick={()=> this.props.history.push('/sign-in')}>Sign-In</Link>
                    <Link onClick={()=> this.props.history.push('/sign-up')}>Sign-Up</Link>
                    <Link onClick={()=> this.props.history.push('/billing')}>Billing</Link>
                </Nav>    


                <Button><Button onClick={()=> this.addGameHandler(userId)}><h1>ADD NEW GAME</h1></Button></Button>
    

                <ListWrapper>
                {list}
                </ListWrapper>
                
                {console.log("STOREDROUNDS GL", this.props.storedRound)}
            </GameWrapper>
        )
    }
}

function mapStateToProps(state) {
    return { 
        storedRound: state.round.storedRound,
        storedGames: state.game.storedGames,  
        errorMessage: state.auth.errorMessage 
    };
  }
  
  export default connect(mapStateToProps, { addGame, getGames })(withRouter(GameList));

 