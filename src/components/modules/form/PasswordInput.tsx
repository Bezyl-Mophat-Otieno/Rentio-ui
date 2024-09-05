import { useState, memo, useEffect } from "react";
import clsx from "clsx";
import IconButton from "@/components/common/IconButton";
import {
  UpdateSignInParentState,
  UpdateSignUpParentState,
} from "@/types/auth-types";
import { isEqual } from "lodash";

interface PasswordInputProps {
  errors?: string[];
  name: string;
  title: string;
  value: string;
  updateParentState: UpdateSignInParentState | UpdateSignUpParentState;
}

const PasswordInput = ({
  errors,
  title,
  name,
  value,
  updateParentState,
}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateParentState("formData", { name, value });
  };

  return (
    <div className="mb-3 position-relative">
      <label className="form-label" htmlFor="password">
        {title}
      </label>
      <input
        id={name}
        type={isPasswordVisible ? "text" : "password"}
        name={name}
        value={value}
        className="form-control"
        onChange={handleInputOnchange}
      />
      <IconButton
        iconClass={clsx("cursor-pointer p-2", {
          "fas fa-eye-slash": !isPasswordVisible,
          "fas fa-eye": isPasswordVisible,
        })}
        onClick={togglePasswordVisibility}
      />
      {errors?.map((error, index) => (
        <div key={index} className="custom-invalid-feedback">
          {error}
        </div>
      ))}
    </div>
  );
};

const propsAreEqual = (
  prevProps: PasswordInputProps,
  nextProps: PasswordInputProps,
) => {
  return (
    isEqual(prevProps.errors, nextProps.errors) &&
    prevProps.value === nextProps.value
  );
};
export default memo(PasswordInput, propsAreEqual);
