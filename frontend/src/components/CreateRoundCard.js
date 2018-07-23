import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { getThree } from '../actions';// delete later
import {
  CreateRoundCardWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label
} from "./primitives/CreateRoundCard";

class CreateRoundCard extends Component {

    getRound = () => {
      this.props.getThree();
  }

  render() {
    const { handleSubmit } = this.props;
<<<<<<< HEAD
=======
  
>>>>>>> af53d10ea4d8e44aa3d860a5f67f0a201bce860c
    return (
        
      <CreateRoundCardWrapper>
        <form>
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
<<<<<<< HEAD
            <Field name="questions" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
=======
            <Field
              name="questions"
              component="select"
              >
                <option>Number of Questions</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
>>>>>>> af53d10ea4d8e44aa3d860a5f67f0a201bce860c
            </Field>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Category</Label>
            </LabelWrapper>
<<<<<<< HEAD
            <Field name="category" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
=======
            <Field
              name="category"
              component="select"
              >
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
>>>>>>> af53d10ea4d8e44aa3d860a5f67f0a201bce860c
            </Field>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Difficulty</Label>
            </LabelWrapper>
<<<<<<< HEAD
            <Field name="difficulty" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
=======
            <Field
              name="difficulty"
              component="select"
              >
                <option>Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
>>>>>>> af53d10ea4d8e44aa3d860a5f67f0a201bce860c
            </Field>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Type</Label>
            </LabelWrapper>
<<<<<<< HEAD
            <Field name="type" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </fieldset>
          <ButtonWrapper>
            <Button>View</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>Delete</Button>
          </ButtonWrapper>
=======
            <Field
              name="type"
              component="select"
              >
                 <option value="multiple">Multiple Choice</option>
                 <option value="boolean">True / False</option>
            </Field>
          </fieldset>
          <ButtonWrapper><Button>View</Button></ButtonWrapper>
          <ButtonWrapper><Button>Delete</Button></ButtonWrapper>
          <ButtonWrapper><div onClick={()=> this.getRound()}>get questions</div></ButtonWrapper>
>>>>>>> af53d10ea4d8e44aa3d860a5f67f0a201bce860c
        </form>
   
        {console.log("ROUND", this.props.round)} {/* delete later */}
      </CreateRoundCardWrapper>
    );
  }
}

function mapStateToProps(state) {
<<<<<<< HEAD
  return { errorMessage: state.auth.errorMessage };
}
export default compose(
  connect(
    mapStateToProps,
    null //create action for createround
  ),
  reduxForm({ form: "createround" })
)(CreateRoundCard);
=======
    return { 
      round: state.round.round,  
      errorMessage: state.auth.errorMessage
     };
  }
  export default compose(
    connect(
      mapStateToProps,
      { getThree } 
    ),
    reduxForm({ form: "createround" })
  )(CreateRoundCard);

>>>>>>> af53d10ea4d8e44aa3d860a5f67f0a201bce860c
