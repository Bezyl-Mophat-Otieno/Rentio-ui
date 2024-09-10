import { isEqual } from "lodash";
import { memo, useEffect } from "react";
import {
  UpdateSignInParentState,
  UpdateSignUpParentState,
} from "@/types/auth-types";

interface EmailInputProps {
  errors?: string[];
  value: string;
  updateParentState?: UpdateSignInParentState | UpdateSignUpParentState;
}

const EmailInput = ({ errors, updateParentState, value }: EmailInputProps) => {
  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (updateParentState) {
      updateParentState("formData", { name, value });
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="email">
        Enter a valid email address.
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={value}
        className="form-control"
        onChange={handleInputOnchange}
      />
      {errors?.map((error: string, index: number) => (
        <div key={index} className="custom-invalid-feedback">
          {error}
        </div>
      ))}
    </div>
  );
};

const propsAreEqual = (
  prevProps: EmailInputProps,
  nextProps: EmailInputProps,
) => {
  return (
    isEqual(prevProps.errors, nextProps.errors) &&
    prevProps.value === nextProps.value
  );
};

export default memo(EmailInput, propsAreEqual);
