import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import axios from "axios";
import { signOut} from '../actions';


import { 
  Hamburger,
  NavText,
  NavUl,
  NavLi
  } from './primitives/Nav'; 

import Nav from './UI/Nav';
// import './primitives/css/Billing.css';

import {
  BillingWrapper,
  BillingLabel,
  BillingTitle,
  BillingButton,
  BillingRadio,
  LogOut,
  RadioContainer,
  Radio
} from "./primitives/Billing";

const tier1Price = 999;
const tier2Price = 2999;

class Billing extends Component {
  state = {
    quantity: 1,
    description: "Test",
    tier: "No Tier Selected",
    menu: false
  };


  openNav() {
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
    this.setState({ menu: true})
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    this.setState({ menu: false})
  }

  toggleRadioButton = ev => {
    console.log(ev.target.value);
    this.setState({ type: ev.target.value });
  };

  updateQuantity = ev => {
    this.setState({ quantity: ev.target.value });
  };

  logOut = async event => {
    await this.props.signOut();
    this.props.history.push("/")
  }

  render() {
    console.log(this.state.type);
    
    let hamburger;

            if (this.state.menu === true) {
                hamburger = <Hamburger onClick={()=> this.state.menu ? this.closeNav() : this.openNav()} class="col">
                            <div class="con">
                            <div class="bar arrow-top-r"></div>
                            <div class="bar arrow-middle-r"></div>
                            <div class="bar arrow-bottom-r"></div>
                            </div>
                         </Hamburger>
            }
            
            if (this.state.menu === false) {
                hamburger = <Hamburger onClick={()=> this.state.menu ? this.closeNav() : this.openNav()} class="col">
                            <div class="con">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            </div>
                         </Hamburger>
            }
    return (
      <BillingWrapper id="main" className="Billing">
      
      <Nav id="mySidenav">
        <NavUl>
        <NavLi><NavText onClick={()=> this.props.history.push('/games')}>Games</NavText></NavLi>
            <NavLi><NavText onClick={()=> this.props.history.push('/settings')}>Settings</NavText></NavLi>
            <NavLi><NavText onClick={()=> this.logOut()}>Log Out</NavText></NavLi>
        </NavUl>    
      </Nav>
                {hamburger}

        <BillingTitle>Billing</BillingTitle>
        <BillingTitle>Upgrade your game below!</BillingTitle>
        <form>
     
          <RadioContainer>

          <BillingRadio className="radio">
          <div>
          <Radio
                className=" radio"
                
                type="radio"
                value="tier1"
                checked={this.state.type === "tier1"}
                onChange={this.toggleRadioButton}
                
              />
        
              

            <BillingLabel className="billing-label">
            
              Basic Tier (create up to 10 games with 10 rounds of 10 questions)
            </BillingLabel>

            

            </div> 
          </BillingRadio>
          <BillingRadio className="radio">
            <BillingLabel className="billing-label">
              <Radio
                
                type="checkbox"
                value="tier2"
                checked={this.state.type === "tier2"}
                onChange={this.toggleRadioButton}
              />
              Premium Tier (Unlimited games, rounds, questions)
            </BillingLabel>
          </BillingRadio>

        </RadioContainer >

        </form>
        {this.checkoutButton()}
      </BillingWrapper>
    );
  }

  checkoutButton = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const email = decoded.email;
    const orgName = decoded.orgName;
    const userId = decoded.sub;

    const { description } = this.state;
    let amount = null;
    if (this.state.type === "tier1") {
      amount = tier1Price;
    } else if (this.state.type === "tier2") {
      amount = tier2Price;
    }

    return (
      <StripeCheckout
        name={`Trivializer ${this.state.type} Purchase`}
        email={email}
        allowRememberMe={false}
        description={description}
        amount={amount}
        token={this.onToken(amount, description)}
        currency="USD"
        stripeKey={process.env.STRIPE_PK || "pk_test_6Il0D2PIhZrVUAjYbIW8ePpR"}
      >
      </StripeCheckout>
    );
  };

  onToken = (amount, description) => token => {
    const localToken = localStorage.getItem("token");
    const decoded = jwt_decode(localToken);
    const userId = decoded.sub;
    axios
      .post("http://localhost:5000/api/charge", {
        description,
        source: token.id,
        currency: "USD",
        amount,
        userId
      })
      .then(res => {
        alert("Payment successful");
        // this.props.updateUser(res.data.user);
        console.log(res);
      })
      .catch(data => {
        alert("Payment declined");
        console.log(data);
      });
  };
}
const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default connect(
  mapStateToProps,
  {signOut}
)(withRouter(Billing));