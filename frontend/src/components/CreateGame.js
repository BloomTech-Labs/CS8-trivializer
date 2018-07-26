import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { getRounds } from '../actions';

import {
  CreateGameWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label,
  Title
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
    this.props.getRounds()
  }

  onSubmit = formProps => {
    // this.props.getThree(formProps);
    console.log("COME BACK TO THIS");
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    
    let elements = []; // array that olds round components that haven't been saved yet

    for ( let i = 0; i < this.state.count; i++) { // creates new components based on counter
    elements.push( <CreateRoundCard gameId={this.props.match.params.id} /> );
    }

    let list;

    if (list) {
    return( list = this.props.getRound.map(()=> {
      return (
        <CreateRoundCard game={this.props.match.params.id}/>
      )
    })
  )
  }
    const { handleSubmit } = this.props;
    return (
      <CreateGameWrapper>
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

        {/* <div>
        <CreateRoundCard />
        </div> */}
        <div onClick={this.increment}>++counter</div>


          {/* test below */}
          <div> 
          {list}
          {elements}
          </div>
          
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
)(CreateGame);
