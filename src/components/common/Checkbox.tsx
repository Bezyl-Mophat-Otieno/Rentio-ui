import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Checkbox = ({ id, label, ...checkboxProps }: CheckboxProps) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id={id}
      {...checkboxProps}
    />
    <label className="form-check-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

export default Checkbox;
