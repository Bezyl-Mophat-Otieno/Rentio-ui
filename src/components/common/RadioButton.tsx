import { memo } from "react";
import { isEqual } from "lodash";
import clsx from "clsx";

interface RadioButtonSelectionProps {
  value: number;
  id: string;
  name: string;
  labelText: string;
  errors?: any;
  checked?: boolean;
  className?: string;
  onChange: (name: string, value: any) => void;
  onBlur: (name: string) => void;
}

const RadioButtonSelection = ({
  id,
  value,
  name,
  labelText,
  errors,
  onBlur,
  onChange,
  className,
  checked,
}: RadioButtonSelectionProps) => {
  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    onChange(name, +value);
  };

  const handleInputOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    onBlur(name);
  };

  return (
    <div className="mb-3">
      <div className="form-check">
        <input
          type="radio"
          id={id}
          value={value}
          checked={checked}
          className={clsx("form-check-input", className)}
          onChange={handleInputOnchange}
          onBlur={handleInputOnBlur}
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
