import React, { Component } from 'react';
import { GameWrapper } from './primitives/GameList';
import requireAuth from '../hoc/requireAuth';

class GameList extends Component {
    homeRouteClick = () => {
        this.props.history.push("/");
      };
    render() {
        return(
            <GameWrapper>
                <h1>WELCOME TO THE GAME ZONE KID!!!!!!!!!</h1>
                <button onClick={this.homeRouteClick}></button>
            </GameWrapper>
        )
    }
}

export default requireAuth(GameList); //requireAuth()