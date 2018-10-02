import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './Root';
import App from './components/App';

import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

import registerServiceWorker from './registerServiceWorker';

import Landing from './components/Landing.js';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GameList from './components/GameList';
import Settings from './components/Settings';
import CreateGame from './components/CreateGame';
import CreateRoundCard from './components/CreateRoundCard';
import Questions from './components/Questions';
import Checkout from './components/Billing';

import RCard from './components/RCard'
import "./index.css";

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <App >
                <Route path='/' exact component={Landing} />
                <Route path='/games' component={GameList} />
                <Route path='/settings' component={Settings} />
                <Route path='/create-game/:id' component={CreateGame} />
                <Route path='/create-round/:id' component={CreateRoundCard} />
                <Route path='/questions/:id' component={Questions} />
                <Route path='/billing' component={Checkout} />
                <Route path='/rcard' component={RCard} />

            </App>    
        </BrowserRouter>
    </Root>
, document.getElementById('root'));
registerServiceWorker()