import React from "react";

import { AppWrapper } from "./primitives/App";

export default ({ children }) => {
  
  return (
    <AppWrapper>
      {children}
    </AppWrapper>
  );
};
