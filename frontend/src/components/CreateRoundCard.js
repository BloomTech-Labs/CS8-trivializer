import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { getThree, addRound } from '../actions';// delete later

import { withRouter } from 'react-router';

import RoundCard from './RoundCard';


import {
  CreateRoundCardWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label
} from "./primitives/CreateRoundCard";

import './primitives/CreateRoundCard';

console.log("PROPS",this.props);
class CreateRoundCard extends Component {
  constructor(props){
    super(props);
    this.state = {
        roundName: '' ,
        numberOfQuestions: '',
        category: '',
        difficulty: '',
        type: ''  
    }

    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


    handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })

  }


  onSubmit = (event) => {
    event.preventDefault();
    let formProps = this.state;
    const gameId = this.props.match.params.id;
    let round = this.props.round;
    console.log(this.state.roundName);
  
    this.props.getThree( formProps, () => {
      
        this.props.addRound(gameId, this.props.round, (id)=> {
          this.props.history.push(`/create-game/${id}`);
        });
    });
     
  }



  render() {

  
    return (
      <CreateRoundCardWrapper>
        <form onSubmit={(e)=> this.onSubmit(e)}>
          <fieldset>
            <LabelWrapper>
              <Label>Round Name</Label>
            </LabelWrapper>
            <input
              name="roundName"
              placeholder="Round Name"
              type="text"
              component="input"
              autoComplete="none"
              onChange={this.handleInput}
              value={this.state.roundName}
            />
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label># of Questions</Label>
            </LabelWrapper>
            <select  name="numberOfQuestions" onChange={this.handleInput} value={this.state.numberOfQuestions} >
              <option>Number of Questions</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Category</Label>
            </LabelWrapper>
            <select name="category" onChange={this.handleInput} value={this.state.category}>
              <option>Any Category</option>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals & Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science & Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">Entertainment: Japanese Anime & Manga</option>
              <option value="32">Entertainment: Cartoon & Animation</option>
            </select>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Difficulty</Label>
            </LabelWrapper>
            <select name="difficulty" onChange={this.handleInput} value={this.state.difficulty}>
              <option>Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Type</Label>
            </LabelWrapper>
            <select name="type" onChange={this.handleInput} value={this.state.type}>
            <option>Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
          </fieldset>
        
          <ButtonWrapper>
            <button>get questions</button>
          </ButtonWrapper>
          
      
        </form>


      </CreateRoundCardWrapper>
    );
  }
}


function mapStateToProps(state) {
  return {
    storedRound: state.round.storedRound,
    round: state.round.round,
    errorMessage: state.auth.errorMessage
  };
}

export default connect(mapStateToProps, { getThree, addRound } )(withRouter(CreateRoundCard));