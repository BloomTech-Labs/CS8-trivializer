import React, { Component } from 'react';
import { Nav } from './primitives/Nav';
import { GameWrapper } from './primitives/Game';
import requireAuth from '../hoc/requireAuth';

class Game extends Component {
    render() {
        return(
            <GameWrapper>
            {console.log(this.props)}
                <h1>WELCOME TO THE GAME ZONE KID!!!!!!!!!</h1>
                <Nav>
                    BILLING :)
                </Nav>
            </GameWrapper>
        )
    }
}

export default requireAuth(Game);