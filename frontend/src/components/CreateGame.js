import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    CreateGameWrapper,
    LabelWrapper,
    ButtonWrapper,
    Button,
    Label,
    Title,
  } from "./primitives/CreateGame";
  import CreateRoundCard from './CreateRoundCard';

class CreateGame extends Component {
    render(){
        const {handleSubmit} = this.props;
        return(
            <CreateGameWrapper>
                <Title>GAME CREATION SCREEN</Title>
                <form>
                    <fieldset>
                        <LabelWrapper><Label>Add a logo</Label></LabelWrapper>
                        <Field 
                            name="logo"
                            type="text"
                            component="input"
                            autocomplete="none"
                         />
                    </fieldset>
                    <fieldset>
                        <LabelWrapper><Label>Game title</Label></LabelWrapper>
                        <Field 
                            name="title"
                            type="text"
                            component="input"
                            autocomplete="none"
                         />
                    </fieldset>
                    <fieldset>
                        {/* http://react-day-picker.js.org/docs/input/ */}
                        <LabelWrapper><Label>Played Date</Label></LabelWrapper>
                        <Field 
                            name="title"
                            type="text"
                            component="input"
                            autocomplete="none"
                         />
                    </fieldset>
                </form>
                <ButtonWrapper><Button>Print Answer Sheets</Button></ButtonWrapper>
                <ButtonWrapper><Button>Print Answer Key</Button></ButtonWrapper>
                <CreateRoundCard />
            </CreateGameWrapper>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
  }
  export default compose(
    connect(
      mapStateToProps,
        null
    ),
    reduxForm({ form: "creategame" })
  )(CreateGame);
