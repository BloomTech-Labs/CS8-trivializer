import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  SignupWrapper,
  Label,
  LabelWrapper,
  ButtonWrapper,
  Button
} from "./primitives/SignUp";
import { signUp } from "../actions/index";

class SignUp extends Component {
  onSubmit = formProps => {
    this.props.signUp(formProps, () => {
      this.props.history.push("/");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <SignupWrapper>
        <h1>SIGN UP PAGE</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <LabelWrapper>
              {" "}
              <Label>Email</Label>
            </LabelWrapper>
            <Field
              name="email"
              placeholder="Enter your Email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Password</Label>
            </LabelWrapper>
            <Field
              name="password"
              placeholder="Enter your Password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <ButtonWrapper>
            <Button>Sign Up</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              {" "}
              Home{" "}
            </Button>
          </ButtonWrapper>
        </form>
      </SignupWrapper>
    );
  }
}

//TODO: MAP STATE TO PROPS
function mapStateToProps(state) {
  return { erorrMessage: state.auth.erorrMessage };
}

export default compose(
  connect(
    mapStateToProps,
    { signUp }
  ),
  reduxForm({ form: "signup" })
)(SignUp);
