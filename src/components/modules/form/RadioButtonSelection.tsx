import React from "react";
import Input from "../../common/Input";
import Label from "../../common/Label";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type RadioButtonSelectionProps = {
  roles: { value: string; label: string }[];
  name: string;
  label: string;
  register: UseFormRegister<any>;
  errors?: any;
};

const RadioButtonSelection: React.FC<RadioButtonSelectionProps> = ({
  roles,
  name,
  label,
  register,
  errors,
}) => (
  <div className="mb-3">
    <Label htmlFor={name}>{label}</Label>
    {roles.map((role) => (
      <div key={role.value} className="form-check">
        <Input
          type="radio"
          id={role.value}
          value={role.value}
          className={`form-check-input ${errors?.[name] ? "is-invalid" : ""}`}
          {...register(name, { required: `${label} is required` })}
        />
        <label htmlFor={role.value} className="form-check-label">
          {role.label}
        </label>
      </div>
    ))}
    {errors?.[name] && (
      <div className="invalid-feedback">
        {errors[name]?.message?.toString()}
      </div>
    )}
  </div>
);

export default RadioButtonSelection;
