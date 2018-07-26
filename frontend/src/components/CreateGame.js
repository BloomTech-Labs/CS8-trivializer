import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { getRounds } from '../actions';
import { withRouter } from 'react-router';
import { Nav, Link } from './primitives/Nav';

import {
  CreateGameWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label,
  Title,
  GameCardWrapper

} from "./primitives/CreateGame";
import CreateRoundCard from "./CreateRoundCard";

class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  componentDidMount = () => {
    let gameId = this.props.match.params.id;
    this.props.getRounds(gameId)
  }

  onSubmit = formProps => {
    // this.props.getThree(formProps);
    console.log("COME BACK TO THIS");
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  signOutHandler = () => {
    this.props.signOut(); 
    this.props.history.push('/');
  }

  render() {
    
    let elements = []; // array that olds round components that haven't been saved yet

    for ( let i = 0; i < this.state.count; i++) { // creates new components based on counter
    elements.push( <CreateRoundCard gameId={this.props.match.params.id} /> );
    }

    let list;

    if (list) {
    return( list = this.props.storedRound.map((r)=> {
      return (
        
        <CreateRoundCard roundId={r._id}/>
      )
    })
  )
  }
    const { handleSubmit } = this.props;
    return (
      <CreateGameWrapper>
          <Nav>
          <Link onClick={()=> this.props.history.push('/games')}>Games List</Link>
              <Link onClick={()=> this.props.history.push('/settings')}>Settings</Link>
              <Link onClick={()=> this.props.history.push('/billing')}>Billing</Link>
          </Nav> 
        <Title>GAME CREATION SCREEN</Title>
        <form>
          <fieldset>
            <LabelWrapper>
              <Label>Add a logo</Label>
            </LabelWrapper>
            <Field
              name="logo"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Game title</Label>
            </LabelWrapper>
            <Field
              name="title"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            {/* http://react-day-picker.js.org/docs/input/ */}
            <LabelWrapper>
              <Label>Played Date</Label>
            </LabelWrapper>
            <Field
              name="title"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
        </form>
        <ButtonWrapper>
          <Button>Print Answer Sheets</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button>Print Answer Key</Button>
        </ButtonWrapper>

      
        <div onClick={this.increment}>ADD ROUND</div>


          {/* test below */}
          <GameCardWrapper> 
          {/* {list} */}
          {elements}
          </GameCardWrapper>
          
        {console.log("PARAMMY", this.props.match.params.id)}  
        {console.log("StoredROUND", this.state.storedRound)}
      </CreateGameWrapper>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    storedRound: state.round.storedRound,
    errorMessage: state.auth.errorMessage 
  };
}
export default compose(
  connect(
    mapStateToProps,
  { getRounds }
  ),
  reduxForm({ form: "creategame" })
)(withRouter(CreateGame));
