import { UseFormRegister } from "react-hook-form";

interface EmailInputProps {
  register: UseFormRegister<any>;
  errors?: any;
}

const EmailInput = ({ register, errors }: EmailInputProps) => (
  <div className="mb-3">
    <label className="form-label" htmlFor="email">
      Enter a valid email address.
    </label>
    <input
      id="email"
      type="email"
      className={`form-control ${errors?.email ? "is-invalid" : ""}`}
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email address",
        },
      })}
    />
    {errors?.email && (
      <div className="invalid-feedback">{errors.email.message}</div>
    )}
  </div>
);

export default EmailInput;
