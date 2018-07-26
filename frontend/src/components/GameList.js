import React, { Component } from 'react';

import { GameWrapper, ListWrapper, Button, ButtonWrapper } from './primitives/GameList';
import { Nav, Link } from './primitives/Nav';

import requireAuth from '../hoc/requireAuth';

import { connect } from 'react-redux';
import { compose } from 'react';
import { createGame, getGames } from '../actions';
import { withRouter } from 'react-router';


import GameCard from './GameCard';

import jwt_decode from "jwt-decode";

class GameList extends Component {
 
    componentDidMount() {
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const userId = decoded.sub;

        this.props.getGames(userId);
        
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
                <Nav>
                    <Link onClick={()=> this.props.history.push('/settings')}>Settings</Link>
                    <Link onClick={()=> this.props.history.push('/sign-in')}>Sign-In</Link>
                    <Link onClick={()=> this.props.history.push('/sign-up')}>Sign-Up</Link>
                    <Link onClick={()=> this.props.history.push('/billing')}>Billing</Link>
                </Nav>    


                <Button><Button onClick={()=> this.createGameHandler(userId)}><h1>ADD NEW GAME</h1></Button></Button>
    

                <ListWrapper>
                {list}
                </ListWrapper>
                
                {console.log("STOREDROUNDS GL", this.props.storedGame)}
            </GameWrapper>
        )
    }
}

function mapStateToProps(state) {
    return { 
        storedRound: state.round.storedRound,
        storedGames: state.game.storedGames,  
        erorrMessage: state.auth.erorrMessage 
    };
  }
  
  export default connect(mapStateToProps, { createGame, getGames })(withRouter(GameList));

 