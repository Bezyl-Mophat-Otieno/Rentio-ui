import React from "react";
import Checkbox from "../../common/Checkbox";

const RememberMe = () => (
  <div className="mb-3 d-sm-flex justify-content-between">
    <Checkbox id="rememberCheck" label="Remember me?" />
    <a href="forgot-password.html">Forgot password?</a>
  </div>
);

export default RememberMe;
