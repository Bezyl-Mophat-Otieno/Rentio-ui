import { UseFormRegister } from "react-hook-form";

interface RememberMeProps {
  register: UseFormRegister<any>;
}

const RememberMe = ({ register }: RememberMeProps) => (
  <div className="mb-3 d-sm-flex justify-content-between">
    <div>
      <input
        type="checkbox"
        id="rememberMe"
        {...register("rememberMe")}
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor="rememberMe">
        Remember me?
      </label>
    </div>
    <a href="forgot-password.html">Forgot password?</a>
  </div>
);

export default RememberMe;
