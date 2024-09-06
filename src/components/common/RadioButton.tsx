import { memo } from "react";
import { isEqual } from "lodash";
import {
  UpdateSignInParentState,
  UpdateSignUpParentState,
} from "@/types/auth-types";
import clsx from "clsx";

interface RadioButtonSelectionProps {
  value: number;
  id: string;
  name: string;
  labelText: string;
  errors?: any;
  className?: string;
  updateParentState: UpdateSignUpParentState | UpdateSignInParentState;
}

const RadioButtonSelection = ({
  id,
  value,
  name,
  labelText,
  errors,
  updateParentState,
  className,
}: RadioButtonSelectionProps) => {
  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (updateParentState) {
      updateParentState("formData", { name, value });
    }
  };

  return (
    <div className="mb-3">
      <div className="form-check">
        <input
          type="radio"
          id={id}
          value={value}
          className={clsx("form-check-input", className)}
          onChange={handleInputOnchange}
          name={name}
        />
        <label htmlFor={name} className="form-check-label">
          {labelText}
        </label>
      </div>
      {errors?.map((error: string, index: number) => (
        <div key={index} className="custom-invalid-feedback">
          {error}
        </div>
      ))}
    </div>
  );
};
const propsAreEqual = (
  prevProps: RadioButtonSelectionProps,
  nextProps: RadioButtonSelectionProps,
) => {
  return (
    isEqual(prevProps.errors, nextProps.errors) &&
    prevProps.value === nextProps.value
  );
};

export default memo(RadioButtonSelection, propsAreEqual);
