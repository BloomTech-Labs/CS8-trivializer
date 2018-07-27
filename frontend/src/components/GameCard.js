import React from 'react';
import { withRouter } from 'react-router';
import { GameCardWrapper } from './primitives/GameCard';

const GameCard = (props) => {
    return (
            <GameCardWrapper onClick={()=> {props.history.push(`/create-game/${props.id}`)}}>
            ADD NEW GAME!!!
            {console.log(props)}
            {props.created}
            </GameCardWrapper>
        )
}

export default withRouter(GameCard);

