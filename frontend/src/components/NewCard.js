import React from 'react';

import { 
    NewGameCardWrapper,
    } from './primitives/NewCard';

import './primitives/css/NewCard.css'

const NewGameCard = (props) => {


    
    return (
            <NewGameCardWrapper className="card-1 hvr-rectangle-out ">
                {props.children}
            </NewGameCardWrapper>
        )
}

export default NewGameCard;