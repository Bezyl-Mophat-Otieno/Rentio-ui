import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  errorMessage,
  ...inputProps
}) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input className="form-control" {...inputProps} />
    {errorMessage && <p className="error">{errorMessage}</p>}
  </div>
);
export default InputField;
