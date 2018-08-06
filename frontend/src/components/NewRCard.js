import React from 'react';

import { 
    NewRCardWrapper,
    } from './primitives/NewRCard';

import './primitives/css/NewRCard.css'

const NewRCard = (props) => {


    
    return (
            <NewRCardWrapper className="card-1 hvr-rectangle-out">
                {props.children}
            </NewRCardWrapper>
        )
}

export default NewRCard;