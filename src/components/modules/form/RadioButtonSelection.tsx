import { memo } from "react";
import { isEqual } from "lodash";
import {
  UpdateSignInParentState,
  UpdateSignUpParentState,
} from "@/types/auth-types";
type RadioButtonSelectionProps = {
  roles: { value: number; label: string }[];
  name: string;
  value: number;
  label: string;
  errors?: any;
  updateParentState?: UpdateSignUpParentState | UpdateSignInParentState;
};

const RadioButtonSelection = ({
  roles,
  name,
  label,
  errors,
  updateParentState,
}: RadioButtonSelectionProps) => {
  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (updateParentState) {
      updateParentState("formData", { name, value });
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {roles.map((role) => (
        <div key={role.value} className="form-check">
          <input
            type="radio"
            id={`${role.value}`}
            value={role.value}
            className="form-check-input"
            onChange={handleInputOnchange}
            name={name}
          />
          <label htmlFor={`${role.value}`} className="form-check-label">
            {role.label}
          </label>
        </div>
      ))}

      {errors?.[name]?.map((error: string, index: number) => (
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
  return isEqual(prevProps.errors, nextProps.errors);
};

export default memo(RadioButtonSelection, propsAreEqual);
