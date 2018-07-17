import React from "react";
import Button from "./UI/Button.js";
import { withRouter } from "react-router";

const Landing = () => {
  return (
    <div>
      <Button>Sign Up</Button>
      <Button>Sign In</Button>
    </div>
  );
};

export default withRouter(Landing);
