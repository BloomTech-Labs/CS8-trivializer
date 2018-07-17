import React, { Component } from "react";
import Button from "./UI/Button.js";
import { withRouter } from "react-router";

class Landing extends Component {
  signUpRouteClick = () => {
    this.props.history.push("/sign-up");
  };
  signInRouteClick = () => {
    this.props.history.push("/sign-in");
  };
  render() {
    return (
      <div>
        <button onClick={this.signUpRouteClick}>Sign Up</button>
        <button onClick={this.signInRouteClick}> Sign In</button>
        {/* // Issue with Button component not getting the function inside of onClick */}
        {/* <Button onClick={ () => {this.signUpRouteClick()} }>Sign Up</Button> */}
        {/* <Button>Sign In</Button> */}
      </div>
    );
  }
}
export default withRouter(Landing);
