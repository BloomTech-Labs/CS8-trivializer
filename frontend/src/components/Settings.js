import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import jwt_decode from "jwt-decode";
import { withRouter } from 'react-router';
import { compose } from "redux";
import { connect } from "react-redux";
import { updateSettings, signOut } from "../actions/index";
import { Nav, Link } from './primitives/Nav';
import {
  SettingsWrapper,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Label,
  Title
} from "./primitives/Settings";

class Settings extends Component {
  //  onSubmit = formProps => {
  //   this.props.updateSettings(formProps);
  // }
  
  onSubmit = formProps => {
      this.props.updateSettings(formProps, () => {
        this.props.history.push('/games');
    });
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
                  <Nav>
                    <Link onClick={()=> this.props.history.push('/games')}>Games List</Link>
                    <Link onClick={()=> this.props.history.push('/sign-in')}>Sign-In</Link>
                    <Link onClick={()=> this.props.history.push('/sign-up')}>Sign-Up</Link>
                    <Link onClick={()=> this.props.history.push('/billing')}>Billing</Link>
                </Nav>  

        <Title>SETTINGS PAGE</Title>
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
              type="email"
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
)(withRouter(Settings));
