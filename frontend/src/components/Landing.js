import React, { Component } from "react";
// import Button from "./UI/Button.js";
import { withRouter } from "react-router";
import { LandingWrapper, ButtonWrapper, Button, CarouselWrapper } from "./primitives/Landing";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

class Landing extends Component {
  signUpRouteClick = () => {
    this.props.history.push("/sign-up");
  };
  signInRouteClick = () => {
    this.props.history.push("/sign-in");
  };
  render() {
    return (
      <LandingWrapper>
        <CarouselWrapper>
          <Carousel showThumbs={false} autoplay={true} showStatus={false} width="100rem">
            <div>
              <img src="https://guidelive.imgix.net/1504297757-Bartrivia06.jpg?fit=clip&q=60&or=0&auto=format&h=600" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://img.huffingtonpost.com/asset/564b6b941f00002500f3cfaa.jpeg?ops=crop_0_380_4256_2452,scalefit_720_noupscale" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://www.theeastside.org/assets/files/trivia-night-thirsty-scholar.jpg" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </CarouselWrapper>
        <ButtonWrapper>
          <Button onClick={this.signUpRouteClick}>Sign Up</Button>
          <Button onClick={this.signInRouteClick}> Sign In</Button>
        </ButtonWrapper>
      </LandingWrapper>
    );
  }
}
export default withRouter(Landing);
