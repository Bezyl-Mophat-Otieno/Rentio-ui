import { UseFormRegister } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegister<any>;
  errors?: any;
  title?: string;
}

const PasswordInput = ({ register, errors, title }: PasswordInputProps) => (
  <div className="mb-3 position-relative">
    <label className="form-label" htmlFor="password">
      {title ?? "Password"}
    </label>
    <input
      id="password"
      type="password"
      className={`form-control ${errors?.password ? "is-invalid" : ""}`}
      {...register("password", { required: "Password is required" })}
    />
    {errors?.password && (
      <div className="invalid-feedback">{errors.password.message}</div>
    )}
  </div>
);

export default PasswordInput;
