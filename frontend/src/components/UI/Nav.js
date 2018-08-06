import React from 'react';

import { NavWrapper } from '../primitives/Nav';
import './Nav.css';

const Nav = ({children}) => {

    return (
        <NavWrapper id="mySidenav" class="sidenav">
           {children}
        </NavWrapper>
    )
}

export default Nav