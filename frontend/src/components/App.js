import React from "react";
import { Nav } from "./primitives/Nav";
import { StripeProvider } from "react-stripe-elements";

import { AppWrapper } from "./primitives/App";

export default ({ children }) => {
  
  return (
    
      <AppWrapper>
        {children}
      </AppWrapper>
  );
};
