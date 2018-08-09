import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from "axios";
import { signOut } from "../actions";

import { Hamburger, NavText, NavUl, NavLi } from "./primitives/Nav";

import Nav from "./UI/Nav";
// import './primitives/css/Billing.css';

import {
  BillingWrapper,
  PriceContainer,
  PriceDiv,
  Top,
  Bot,
  Title,
  Li,
  Price,
  Button,
  PositionMenu

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
    this.setState({ menu: true });
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    this.setState({ menu: false });
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
    this.props.history.push("/");
  };

  render() {
    console.log(this.state.type);

    let hamburger;

    if (this.state.menu === true) {
      hamburger = (
        <Hamburger
          onClick={() => (this.state.menu ? this.closeNav() : this.openNav())}
          class="col"
        >
          <div class="con">
            <div class="bar arrow-top-r" />
            <div class="bar arrow-middle-r" />
            <div class="bar arrow-bottom-r" />
          </div>
        </Hamburger>
      );
    }

    if (this.state.menu === false) {
      hamburger = (
        <Hamburger
          onClick={() => (this.state.menu ? this.closeNav() : this.openNav())}
          class="col"
        >
          <div class="con">
            <div class="bar" />
            <div class="bar" />
            <div class="bar" />
          </div>
        </Hamburger>
      );
    }
    return (
      <BillingWrapper id="main" className="Billing">
        <Nav id="mySidenav">
          <NavUl>
            <NavLi>
              <NavText onClick={() => this.props.history.push("/games")}>
                Games
              </NavText>
            </NavLi>
            <NavLi>
              <NavText onClick={() => this.props.history.push("/settings")}>
                Settings
              </NavText>
            </NavLi>
            <NavLi>
              <NavText onClick={() => this.logOut()}>Log Out</NavText>
            </NavLi>
          </NavUl>
        </Nav>
        <PositionMenu>{hamburger}</PositionMenu>
        <PriceContainer>
   
          <PriceDiv>
            <Top>
              <Title><div>Free</div></Title>
              <Price>$0</Price>

              <Li><div>1 Game</div></Li>
              <Li>3 Rounds</Li>
              <Li> 5 questions</Li>
            </Top>
            <Bot>
              {/* <div>{this.checkoutButton2()}</div> */}
            </Bot>
          </PriceDiv>


          <PriceDiv>
            <Top>
              <Title><div>Basic</div></Title>
              <Price>$9.99</Price>

              <Li><div><b>10</b> Games</div></Li>
              <Li><b>10</b> Rounds</Li>
              <Li>Up to 10 questions</Li>
            </Top>
            <Bot>
              <div>{this.checkoutButton()}</div>
            </Bot>
          </PriceDiv>
              

          <PriceDiv>
            <Top>
              <Title><div>Premium</div></Title>
              <Price>$29.99</Price>

              <Li><div><b>Unlimited</b> Games</div></Li>
              <Li><b>Unlimited</b> Rounds</Li>
              <Li>Up to 50 questions</Li>
            </Top>
            <Bot>
              <div>{this.checkoutButton2()}</div>
            </Bot>
          </PriceDiv>

       </PriceContainer>
        
        
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
    amount = tier1Price;
    // if (this.state.type === "tier1") {
    //   amount = tier1Price;
    // } else if (this.state.type === "tier2") {
    //   amount = tier2Price;
    // }

    return (
      <StripeCheckout
        name={`Trivializer Purchase`}
        email={email}
        allowRememberMe={false}
        description="Basic Tier"
        amount={amount}
        token={this.onToken(amount, description)}
        currency="USD"
        stripeKey={process.env.STRIPE_PK || "pk_test_6Il0D2PIhZrVUAjYbIW8ePpR"}
      >
        {" "}
        <Button>Basic</Button>
      </StripeCheckout>
    );
  };
  checkoutButton2 = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const email = decoded.email;
    const orgName = decoded.orgName;
    const userId = decoded.sub;

    const { description } = this.state;
    let amount = null;
    amount = tier2Price;

    return (
      <StripeCheckout
        name={`Trivializer Purchase`}
        email={email}
        allowRememberMe={false}
        description="Premium Tier"
        amount={amount}
        token={this.onToken(amount, description)}
        currency="USD"
        stripeKey={process.env.STRIPE_PK || "pk_test_6Il0D2PIhZrVUAjYbIW8ePpR"}
      >
        <Button>Premium</Button>
      </StripeCheckout>
    );
  };

  onToken = (amount, description) => token => {
    const localToken = localStorage.getItem("token");
    const decoded = jwt_decode(localToken);
    const userId = decoded.sub;
    axios
      // .post("http://localhost:5000/api/charge", {
      .post("https://fathomless-lowlands-45973.herokuapp.com/api/charge", {
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
  { signOut }
)(withRouter(Billing));
