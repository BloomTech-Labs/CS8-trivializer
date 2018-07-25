import React, { Component } from "react";
import { withRouter } from "react-router";
import { Elements, injectStripe, CardElement, PaymentRequestButtonElement } from "react-stripe-elements";
import { BillingWrapper } from './primitives/Billing';

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

// class PaymentRequestForm extends React.Component {
//   constructor(props) {
//     super(props);

//     // For full documentation of the available paymentRequest options, see:
//     // https://stripe.com/docs/stripe.js#the-payment-request-object
//     const paymentRequest = props.stripe.paymentRequest({
//       country: 'US',
//       currency: 'usd',
//       total: {
//         label: 'Demo total',
//         amount: 1000,
//       },
//     });

//     paymentRequest.on('token', ({complete, token, ...data}) => {
//       console.log('Received Stripe token: ', token);
//       console.log('Received customer information: ', data);
//       complete('success');
//     });

//     paymentRequest.canMakePayment().then((result) => {
//       this.setState({canMakePayment: !!result});
//     });

//     this.state = {
//       canMakePayment: false,
//       paymentRequest,
//     };
//   }

//   render() {
//     return this.state.canMakePayment ? (
//       <PaymentRequestButtonElement
//         paymentRequest={this.state.paymentRequest}
//         className="PaymentRequestButton"
//         style={{
//           // For more details on how to style the Payment Request Button, see:
//           // https://stripe.com/docs/elements/payment-request-button#styling-the-element
//           paymentRequestButton: {
//             theme: 'light',
//             height: '64px',
//           },
//         }}
//       />
//     ) : null;
//   }
// }
// // export default injectStripe(PaymentRequestForm);
// const PayRequest = injectStripe(PaymentRequestForm);


class Billing extends Component {
  handleSubmit = ev => {
    ev.preventDefault();
    console.log("THIS PROPS STRIPE: ", this.props.stripe);
    if (this.props.stripe) {
      this.props.stripe
      .createToken({name: "name", currency: "usd", total: {label: "test charge", amount: 999}})
      // .createToken()
      .then(payload => {
        console.log("TOKEN:", payload);
        // this.props.stripe.paymentRequest({country: "US", currency: "usd", total: {label: "test charge", amount: 999}});
        // console.log("TPS AFTER: ", this.props.stripe);
      })
    } else {
      console.log("Stripe hasn't loaded yet.");
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <CardElement
            { ...createOptions(this.props.fontSize) }
            />
        </label>
        <button>Pay</button>
      </form>
    )
  }
}

const CardForm = injectStripe(Billing);

class Checkout extends Component {
  state = {
    canMakePayment: false,
    paymentRequest: null,
  }

  render() {
    return(
      <BillingWrapper>
        <Elements>
          <CardForm fontSize="40px" />
        </Elements>
        {/* <Elements>
          <PayRequest />
        </Elements> */}
      </BillingWrapper>
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
