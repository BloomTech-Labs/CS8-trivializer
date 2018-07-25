import React from "react";
import { Nav } from "./primitives/Nav";
import { StripeProvider } from "react-stripe-elements";

import { AppWrapper } from "./primitives/App";

export default ({ children }) => {
  
  return (
    <StripeProvider apiKey="pk_test_6Il0D2PIhZrVUAjYbIW8ePpR">
      <AppWrapper>
        <Nav>BILLING</Nav>
        {children}
      </AppWrapper>
    </StripeProvider>
  );
};
