
import React, { Component } from "react";
// import { Elements, StripeProvider } from 'react-stripe-elements';
import StripeCheckout from "react-stripe-checkout";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import axios from "axios";
import { updateUser } from "../actions/index";

class Billing extends Component {
  state = {
    quantity: 1,
    description: "Test",
    type: "sub",
    tier1: null,
    tier2: null,
  };

  toggleRadioButton = ev => {
    // ev.preventDefault();
    console.log(ev.target.value);
    this.setState({ type: ev.target.value });
  };

  updateQuantity = ev => {
    // ev.preventDefault();
    this.setState({ quantity: ev.target.value });
  };

  render() {
    console.log(this.state.type);

    return (
      <div className="window">
        <h1>Billing</h1>
        <h3>Purchase invoice credits below.</h3>
        <form>
          <div className="radio">
            <label className="billing-label">
              <input
                type="radio"
                value="tier1"
                checked={this.state.type === "tier1"}
                onChange={this.toggleRadioButton}
              />
              Paid Tier 1
            </label>
          </div>
          <div className="radio">
            <label className="billing-label">
              <input
                type="radio"
                value="tier2"
                checked={this.state.type === "tier2"}
                onChange={this.toggleRadioButton}
              />
              Paid Tier 2
            </label>
          </div>
        </form>
        {this.checkoutButton()}
      </div>
    );
  }

  checkoutButton = () => {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const email = decoded.email;
    const orgName = decoded.orgName;
    
    const { description } = this.state;
    // const email = this.props.admin.username;
    // const amount = this.state.type === "sub" ? 2000 : 199 * this.state.quantity;
    let amount = null;
    if(this.state.type === "tier1"){
      amount = 599
    } else if(this.state.type === "tier2"){
      amount = 1099
    }

    return (
      <StripeCheckout
        name="trivializer"
        email={email}
        allowRememberMe={false}
        description={description}
        amount={amount}
        token={this.onToken(amount, description)}
        currency="USD"
        stripeKey={process.env.STRIPE_PK || "pk_test_ILI7ZfrCQbKaNU5WAVRa6yg6"}
      />
    );
  };

  onToken = (amount, description) => token =>
    axios
      .post("http://localhost:5000/api/charge", {
        description,
        source: token.id,
        currency: "USD",
        amount
      })
      .then(res => {
        alert("Payment successful");
        this.props.updateUser(res.data.user);
        console.log(res);
      })
      .catch(data => {
        alert("Payment declined");
        console.log(data);
      });
}
const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { updateUser }
)(Billing);
