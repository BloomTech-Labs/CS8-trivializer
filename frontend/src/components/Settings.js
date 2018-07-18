import React, { Component} from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  SettingsWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label
} from "./primitives/Settings";

class Settings extends Component {
//   onSubmit = formProps => {}; 
  render() {
    const { handleSubmit } = this.props;
    return (
      <SettingsWrapper>
        <h1>SETTINGS PAGE</h1>
        {/* onSubmit={handleSubmit(this.onSubmit)} */}
        <form> 
          <fieldset>
            <LabelWrapper><Label>Organization Name</Label></LabelWrapper>
            <Field
              name="name"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <LabelWrapper><Label>Email</Label></LabelWrapper>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <LabelWrapper><Label>Current Password</Label></LabelWrapper>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <LabelWrapper><Label>New Password</Label></LabelWrapper>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <Button>Save</Button>
          <button
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            {" "}
            Home{" "}
          </button>
        </form>
      </SettingsWrapper>
    );
  }
}
function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}
export default compose(
  connect(
    mapStateToProps,
    null //create action for Settings
  ),
  reduxForm({ form: "settings" })
)(Settings);
