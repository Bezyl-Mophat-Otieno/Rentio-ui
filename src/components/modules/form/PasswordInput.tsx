import React, { useState } from "react";
import clsx from "clsx";
import Label from "./../../common/Label";
import IconButton from "./../../common/IconButton";
import Input from "./../../common/Input";

const PasswordInput: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="mb-3 position-relative">
      <Label htmlFor="password">Enter password</Label>
      <Input id="password" type={isPasswordVisible ? "text" : "password"} />
      <IconButton
        iconClass={clsx("cursor-pointer p-2", {
          "fas fa-eye-slash": !isPasswordVisible,
          "fas fa-eye": isPasswordVisible,
        })}
        onClick={togglePasswordVisibility}
      />
    </div>
  );
};

export default PasswordInput;
