import React from "react";
import { UseFormRegister } from "react-hook-form";

type RadioButtonSelectionProps = {
  roles: { value: number; label: string }[];
  name: string;
  label: string;
  register: UseFormRegister<any>;
  errors?: any;
};

const RadioButtonSelection = ({
  roles,
  name,
  label,
  register,
  errors,
}: RadioButtonSelectionProps) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    {roles.map((role) => (
      <div key={role.value} className="form-check">
        <input
          type="radio"
          id={`${role.value}`}
          value={role.value}
          className={`form-check-input ${errors?.[name] ? "is-invalid" : ""}`}
          {...register(name, { required: `${label} is required` })}
        />
        <label htmlFor={`${role.value}`} className="form-check-label">
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
