import { memo, useEffect } from "react";
import clsx from "clsx";
import { UpdateSignInParentState } from "@/types/auth-types";
import { isEqual } from "lodash";
interface CheckboxProps {
  updateParentState: UpdateSignInParentState;
  errors?: string[];
  labelText: string;
  id: string;
  className?: string;
  name: string;
  checked: boolean;
}

const Checkbox = ({
  updateParentState,
  checked,
  labelText,
  name,
  id,
  className,
  errors,
}: CheckboxProps) => {
  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateParentState("formData", { name, value: checked });
  };

  return (
    <div className="mb-3 d-sm-flex justify-content-between">
      <div>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          className={clsx("form-check-input", className)}
          onChange={handleInputOnchange}
        />
        <label className="form-check-label" htmlFor="checkbox">
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

const propsAreEqual = (prevProps: CheckboxProps, nextProps: CheckboxProps) => {
  return (
    isEqual(prevProps.errors, nextProps.errors) &&
    prevProps.checked === nextProps.checked
  );
};

export default memo(Checkbox, propsAreEqual);
