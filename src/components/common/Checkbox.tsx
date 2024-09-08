import { memo } from "react";
import clsx from "clsx";
import { isEqual } from "lodash";
interface CheckboxProps {
  errors?: string[];
  labelText: string;
  id: string;
  className?: string;
  name: string;
  checked: boolean;
  onChange: (name: string, value: any) => void;
  onBlur: (name: string) => void;
}

const Checkbox = ({
  checked,
  labelText,
  name,
  id,
  className,
  errors,
  onBlur,
  onChange,
}: CheckboxProps) => {
  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onChange(name, checked);
  };

  const handleInputOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    onBlur(name);
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
          onBlur={handleInputOnBlur}
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
