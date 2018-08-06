import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import { withRouter } from 'react-router';
import { Nav, Link } from './primitives/Nav';
import {
  SignUpWrapper,
  Label,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Title,
  LogButton,
  InputWrapper,
  TermsText,
  Terms,
  Input
} from "./primitives/SignUp";
import { signUp } from "../actions/index";


import './primitives/css/Landing.css';
//#TODO: ADD FORMAT VERIFICATION FOR EMAIL AND PASSWORD FIELDS


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
    email: '',
    password: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })

  }
  
  onSubmit = (event) => {
    event.preventDefault();
    let formProps = this.state;
  
    this.props.signUp(formProps, () => {
      this.props.history.push("/games");
    });
     
  }




  // onSubmit = formProps => {
  //   this.props.signUp(formProps, () => {
  //     this.props.history.push("/games");
  //   });
  // };
  render() {
    

    const showHideClassname = this.props.show ? "display display-block" : "modal display-none";
    return (
      <SignUpWrapper className={[showHideClassname, "slide-in-top"].join(' ')}>
         <InputWrapper>
        
        <Title>SIGN UP </Title>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <LabelWrapper><Label>Email</Label></LabelWrapper>
            <Input
              name="email"
              type="text"
              component="input"
              autoComplete="none"
              onChange={this.handleInput} 
              value={this.state.email}
            />
          </fieldset>
          <fieldset>
          <LabelWrapper><Label>Password</Label></LabelWrapper>
            <Input
              name="password"
              type="password"
              component="input"
              autoComplete="none"
              onChange={this.handleInput} 
              value={this.state.password}
            />
          </fieldset>
          {/* <fieldset>
          <LabelWrapper><Label>Confirm Password</Label></LabelWrapper>
            <Input
              name="newPassword"
              type="password"
              component="input"
              autoComplete="none"
              
            />
          </fieldset> */}

          <ButtonWrapper><LogButton>Sign Up</LogButton></ButtonWrapper>
          
          
          
        </form>
        </InputWrapper>
      </SignUpWrapper>
      
    );
  }
}


function mapStateToProps(state) {
  return { erorrMessage: state.auth.erorrMessage };
}

export default compose(
  connect(
    mapStateToProps,
    { signUp }
  ),
  reduxForm({ form: "signup" })
)(withRouter(SignUp));
