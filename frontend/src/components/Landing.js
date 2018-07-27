import React, { Component } from "react";
import Button from "./UI/Button.js";
import { withRouter } from "react-router";
import { Carousel } from "react-responsive-carousel";
import { LandingWrapper } from "./primitives/Landing";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'




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
        <Carousel thumbWidth={10} dynamicHeight={true}>
          <div>
            <img src="https://www.theeastside.org/assets/files/trivia-night-thirsty-scholar.jpg" />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>
        {/* <button onClick={this.signUpRouteClick}>Sign Up</button>
        <button onClick={this.signInRouteClick}> Sign In</button> */}
      </div>
    );
  }
}
export default withRouter(Landing);
