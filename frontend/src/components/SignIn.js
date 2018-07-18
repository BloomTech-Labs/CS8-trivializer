import React, { Component, Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { signIn } from "../actions/index";
import { connect } from "react-redux";
import Button from "./UI/Button";
import { AUTH_USER } from "../actions/types";


//#TODO: ADD FORMAT VERIFICATION FOR EMAIL AND PASSWORD FIELDS
class SignIn extends Component {
  onSubmit = formProps => {
    this.props.signIn(formProps, () => {
      this.props.history.push("/");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <Fragment>
        <h1>SIGN IN PAGE</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <Button>Sign In</Button>
          <button
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            {" "}
            Home{" "}
          </button>
        </form>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}
export default compose(
  connect(
    mapStateToProps,
    { signIn }
  ),
  reduxForm({ form: "signin" })
)(SignIn);
