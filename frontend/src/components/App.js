import React from "react";
import { Nav } from "./primitives/Nav";

import { AppWrapper } from "./primitives/App";

export default ({ children }) => {
  
  return (
    <AppWrapper>
      <Nav>BILLING :)</Nav>
      {children}
    </AppWrapper>
  );
};
