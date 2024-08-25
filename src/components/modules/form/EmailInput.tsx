import React from "react";
import Input from "../../common/Input";
import Label from "../../common/Label";

const EmailInput = () => (
  <div className="mb-3">
    <Label htmlFor="email">Enter email id</Label>
    <Input id="email" type="email" />
  </div>
);

export default EmailInput;
