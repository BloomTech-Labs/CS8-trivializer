import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  CreateRoundCardWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label
} from "./primitives/CreateRoundCard";

class CreateRoundCard extends Component {
  render() {
    const { handleSubmit } = this.props;
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
            <Field name="questions" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Category</Label>
            </LabelWrapper>
            <Field name="category" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Difficulty</Label>
            </LabelWrapper>
            <Field name="difficulty" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Type</Label>
            </LabelWrapper>
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
        </form>
      </CreateRoundCardWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}
export default compose(
  connect(
    mapStateToProps,
    null //create action for createround
  ),
  reduxForm({ form: "createround" })
)(CreateRoundCard);
