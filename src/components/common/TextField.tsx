import { isEqual } from "lodash";
import { memo, useEffect } from "react";
import clsx from "clsx";
import {
  UpdateSignInParentState,
  UpdateSignUpParentState,
} from "@/types/auth-types";

interface EmailInputProps {
  errors?: string[];
  labelText: string;
  className?: string;
  name: string;
  type: string;
  id: string;
  value: string;
  updateParentState?: UpdateSignInParentState | UpdateSignUpParentState;
}

const TextField = ({
  errors,
  updateParentState,
  value,
  labelText,
  name,
  id,
  type,
  className,
}: EmailInputProps) => {
  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (updateParentState) {
      updateParentState("formData", { name, value });
    }
  };

  return (
    <div className="mb-3">
      <input
        id={id}
        name={name}
        placeholder={labelText}
        type={type}
        value={value}
        className={clsx("form-control", className)}
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

export default memo(TextField, propsAreEqual);
