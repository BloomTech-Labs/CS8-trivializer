import React from 'react';
import { ButtonWrapper } from '../primatives/UI/Button';
const Button = (props) => {
    return <ButtonWrapper>{props.children}</ButtonWrapper>
}

export default Button;