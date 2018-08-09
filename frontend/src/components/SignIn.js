import React, { Component, Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { signIn } from "../actions/index";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Nav, Link } from './primitives/Nav';
import {
  SigninWrapper,
  Label,
  LabelWrapper,
  ButtonWrapper,
  Button,
  Title,
  Input,
  Text,
  InputWrapper,
  LogButton,
  ErrorMessage
  
} from "./primitives/SignIn";


//#TODO: ADD FORMAT VERIFICATION FOR EMAIL AND PASSWORD FIELDS
class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
    email: '',
    password: '',
    signInError: "",
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
  
    this.props.signIn(formProps, () => {
      this.props.history.push("/games");
    });
    this.setState({signInError: this.props.errorMessage})
    console.log("SIGNIN ERROR", this.props);
  }



  getRound = () => {
    this.props.getThree();
  }

  render() {
    const { handleSubmit } = this.props;

    const showHideClassname = this.props.show ? "display display-block" : "modal display-none";

    return (
      <SigninWrapper className={[showHideClassname, "slide-in-top"].join(' ')}>
         <InputWrapper>
        
        <Title>SIGN IN </Title>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <LabelWrapper><Label>Email</Label></LabelWrapper>
            <Input
              name="email"
              type="email"
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
          <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
          <ButtonWrapper><LogButton>Sign In</LogButton></ButtonWrapper>
          
        
          
        </form>
        </InputWrapper>
      </SigninWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { 
    round : state.round.round,
    errorMessage: state.auth.errorMessage 
  };
}
export default compose(
  connect(
    mapStateToProps,
    { signIn }
  ),
  reduxForm({ form: "signin" })
)(withRouter(SignIn));
