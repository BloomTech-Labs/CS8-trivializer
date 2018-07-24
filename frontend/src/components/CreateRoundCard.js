import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { getThree, addRound } from "../actions"; // delete later
import {
  CreateRoundCardWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label
} from "./primitives/CreateRoundCard";

class CreateRoundCard extends Component {
  onSubmit = formProps => {
    this.props.getThree(formProps);
  };
  aR = (round, formProps) => {
    this.props.addRound(round, formProps);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <CreateRoundCardWrapper>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <LabelWrapper>
              <Label>Round Name</Label>
            </LabelWrapper>
            <Field
              name="roundName"
              placeholder="Round Name"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label># of Questions</Label>
            </LabelWrapper>
            <Field name="numberOfQuestions" component="select">
              <option>Number of Questions</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Field>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Category</Label>
            </LabelWrapper>
            <Field name="category" component="select">
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
            </Field>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Difficulty</Label>
            </LabelWrapper>
            <Field name="difficulty" component="select">
              <option>Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Field>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Type</Label>
            </LabelWrapper>
            <Field name="type" component="select">
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </Field>
          </fieldset>
          <ButtonWrapper>
            <Button>View</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>Delete</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <button>get questions</button>
          </ButtonWrapper>
          <div onClick={() => this.aR(this.props.round)}>Save Round</div>
        </form>

        {console.log("DONT KNOW", this.props.maybeForm) /* delete later */}
        {/* {checkIfFormObject()} */}
        {console.log("FORMPROPS MAYBE?", this.props.form) /* delete later */}

        {/* { console.log("STORED", this.props.storedRound)} */}
      </CreateRoundCardWrapper>
    );
  }
}


function mapStateToProps(state) {
  return {
    storedRound: state.round.storedRound,
    round: state.round.round,
    maybeForm: state.form,
    errorMessage: state.auth.errorMessage
  };
}
// function checkIfFormObject() {
//   if (this.props.maybeForm) {
//     console.log("THIS IS FORM VALUE", typeof(this.props.maybeForm));
//   }
// }
export default compose(
  connect(
    mapStateToProps,
    { getThree, addRound }
  ),
  reduxForm({ form: "createround" })
)(CreateRoundCard);
