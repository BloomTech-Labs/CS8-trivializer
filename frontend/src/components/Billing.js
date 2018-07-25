import React, { Component } from "react";
import { withRouter } from "react-router";
import { Elements, injectStripe, CardElement } from "react-stripe-elements";


const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class Billing extends Component {
  handleSubmit = ev => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
      .createToken()
      .then(payload => {
        console.log("TOKEN:", payload);
      })
    } else {
      console.log("Stripe hasn't loaded yet.");
    }
  }
  
  render() {
    return (
      <Elements>
        <div>Hello from Billing</div>
        {/* Form here */}
        <form onSubmit={this.handleSubmit}>
          <label>
            <CardElement
              { ...createOptions(this.props.fontSize) }
              />
          </label>
          <button>Pay</button>
        </form>
      </Elements>
    )
  }
}

const CardForm = injectStripe(Billing);

class Checkout extends Component {
  render() {
    return(
      <Elements>
        <CardForm fontSize="40px" />
      </Elements>
    )
  }
}

export default withRouter(Checkout);

// export { Billing } withRouter(Billing);

// function mapStateToProps(state) {
//   return { erorrMessage: state.auth.erorrMessage };
// }

// export default compose(
//   connect(
//     mapStateToProps,
//     { cardForm }
//   ),
//   reduxForm({ form: "cardForm" })
// )(CardForm);
