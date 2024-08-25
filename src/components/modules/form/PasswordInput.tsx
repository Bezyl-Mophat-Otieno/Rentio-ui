import { UseFormRegister } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";
import IconButton from "@/components/common/IconButton";
interface PasswordInputProps {
  register: UseFormRegister<any>;
  errors?: any;
  name: string;
  title?: string;
}

const PasswordInput = ({
  register,
  errors,
  title,
  name,
}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="mb-3 position-relative">
      <label className="form-label" htmlFor="password">
        {title ?? "Password"}
      </label>
      <input
        id={name}
        type={isPasswordVisible ? "text" : "password"}
        className={`form-control ${errors?.password ? "is-invalid" : ""}`}
        {...register(name, { required: "Password is required" })}
      />
      <IconButton
        iconClass={clsx("cursor-pointer p-2", {
          "fas fa-eye-slash": !isPasswordVisible,
          "fas fa-eye": isPasswordVisible,
        })}
        onClick={togglePasswordVisibility}
      />
      {errors?.password && (
        <div className="invalid-feedback">{errors.password.message}</div>
      )}
    </div>
  );
};

export default PasswordInput;
