import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { getRounds } from '../actions';
import { withRouter } from 'react-router';
import { Nav, Link } from './primitives/Nav';
import { RoundButton, RoundButtonWrapper } from './primitives/CreateGame';

import RoundCard from './RoundCard';
import RCard from './RCard';

import {
  CreateGameWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label,
  Title,
  GameCardWrapper

} from "./primitives/CreateGame";


class CreateGame extends Component {
      componentDidMount() {
        let gameId = this.props.match.params.id;
        this.props.getRounds(gameId)
        console.log("CreateGame CDM rounds", this.props.storedRound)    
    }

    addRoundHandler = (gameId) => {
        this.props.history.push(`/create-round/${gameId}`)
      }

    render(){
        let gameId = this.props.match.params.id;

        let list =  this.props.storedRound.map((r, i) => { 
            return (
                
                    <RCard
                     key={r._id} 
                     id={r._id}
                     category={r.questions[0].category}
                     difficulty={r.difficulty}
                     numberOfQuestions={r.numberOfQuestions}
                     type={r.type}
                     questions={r.questions}
                     roundName={r.roundName}
                    //  gameId={gameId}
                     
                       />            
                    )
                });

    //     let list =  this.props.storedRound.map((r, i) => { 
        // return (
        //     <RoundCard
        //      key={r._id} 
        //      id={r._id}
        //      category={r.category}
        //      difficulty={r.difficulty}
        //      numberOfQuestions={r.numberOfQuestions}
        //      questions={r.questions}
        //      roundName={r.roundName}
        //      gameId={gameId}
             
        //        />
            
    //     )
    // });

    // let elements = []; 

    // for ( let i = 0; i < this.state.count; i++) { // creates new components based on counter
    // elements.push( <CreateRoundCard gameId={this.props.match.params.id} /> );
    // }


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

      
        <RoundButtonWrapper onClick={()=> this.addRoundHandler(gameId)}><RoundButton>ADD ROUND</RoundButton></RoundButtonWrapper>
        
        <div>    
            {list}
            {console.log("CreateGames SR", this.props.storedRound)}
        </div>
        </CreateGameWrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
      storedRound: state.round.storedRound,
      round: state.round.round,
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