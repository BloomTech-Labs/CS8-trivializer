import React, { Component } from 'react';
import { GameWrapper } from './primitives/GameList';
import requireAuth from '../hoc/requireAuth';

import { connect } from 'react-redux';
import { compose } from 'react';
import { getRounds } from '../actions';

class GameList extends Component {
    componentDidMount() {
        this.props.getRounds();
    }

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

function mapStateToProps(state) {
    return { erorrMessage: state.auth.erorrMessage };
  }
  
//   export default compose(
//     connect(
//       mapStateToProps,
//       { getRounds }
//     ),
   
//   )(requireAuth(GameList));

  export default connect(mapStateToProps, { getRounds })(requireAuth(GameList));

// export default requireAuth(GameList); 