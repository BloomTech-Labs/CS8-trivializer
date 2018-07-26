import React from "react";
import { Nav } from "./primitives/Nav";

import { AppWrapper } from "./primitives/App";

export default ({ children }) => {
  
  return (
    <AppWrapper>
      <Nav />
      {children}
    </AppWrapper>
  );
};
