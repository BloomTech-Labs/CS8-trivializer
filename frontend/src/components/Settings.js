import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import jwt_decode from "jwt-decode";
import { compose } from "redux";
import { connect } from "react-redux";
import { updateSettings, signOut } from "../actions/index";
import {
  SettingsWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label
} from "./primitives/Settings";

class Settings extends Component {
   onSubmit = formProps => {
    this.props.updateSettings(formProps);
  }


  
  render() {




    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const email = decoded.email;
    const orgName = decoded.orgName;
    console.log("ORG NAME", orgName);

    console.log("EMAIL", email);
    
    const { handleSubmit } = this.props;
    return (
      <SettingsWrapper>
        <h1>SETTINGS PAGE</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <LabelWrapper>
              <Label>Organization Name</Label>
            </LabelWrapper>
            <Field
              name="orgName"
              placeholder={orgName}
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Email</Label>
            </LabelWrapper>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
              placeholder={email}
            />
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>Old Password</Label>
            </LabelWrapper>
            <Field
              name="oldPassword"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <LabelWrapper>
              <Label>New Password</Label>
            </LabelWrapper>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <button>Save</button>
          <button
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            {" "}
            Home{" "}
          </button>
          <button onClick={() => this.props.signOut()}>Sign Out</button>
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
    { updateSettings, signOut } //create action for Settings
  ),
  reduxForm({ form: "settings" })
)(Settings);
