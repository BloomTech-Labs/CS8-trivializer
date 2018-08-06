import React, { Component } from "react";
import { withRouter } from "react-router";

import $ from 'jquery';
import anime from 'animejs';

import SignUp from './SignUp';
import SignIn from './SignIn';

import Modal from './UI/Modal';
import './UI/Modal.css';

import { 
         LandingWrapper,
         LandingImage, 
         Img, 
         TopDiv,
         MainTitle,
         SignUpWrapper,
         SignUpButton,
         SignInButton,
         BotDiv,
         
      
        } from './primitives/Landing.js';

import './primitives/css/Landing.css';


class Landing extends Component {
  state = { show: false, show1: false, show2: false };


  componentDidMount = () => {

    $('.ml6 .letters').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline({loop: false})
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 3400,
        delay: function(el, i) {
          return 50 * i;
        }
      }) 
  }

  showModal = () => {
    this.setState({ show: true});
  };

  hideModal = () => {
    this.setState({ show: false, show1: false, show2: false});
  };

  showSignUp = () => {
    this.setState({ show: true, show1: true});
  };

  showSignIn = () => {
    this.setState({ show: true, show2: true});
  };

 

  render() {
    return (
      <LandingWrapper>
        
        <Img >
           {/* <Modal show={this.state.show} handleClose={this.hideModal}> */}
            
           {/* </Modal> */}
           <SignUp show={this.state.show1} handleClose={this.hideModal}  />
           <SignIn show={this.state.show2} handleClose={this.hideModal} />
      <TopDiv>
          <MainTitle className="ml6">
            <span className="letters textShadow">Trivializer</span>
          </MainTitle>
            
          <SignInButton onClick={this.showSignIn}> Sign In</SignInButton>
        
      </TopDiv>
      
      <BotDiv>
        <SignUpButton type="button" onClick={this.showSignUp}>Sign up it's free</SignUpButton>
      </BotDiv>
       
    
        
        </Img> 

      </LandingWrapper>
    );
  }
}
export default withRouter(Landing);
