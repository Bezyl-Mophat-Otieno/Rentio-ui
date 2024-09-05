import { memo, useEffect } from "react";
import { UpdateSignInParentState } from "@/types/auth-types";
import { isEqual } from "lodash";
interface RememberMeProps {
  updateParentState: UpdateSignInParentState;
  value: boolean;
}

const RememberMe = ({ updateParentState, value }: RememberMeProps) => {
  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateParentState("formData", { name, value: checked });
  };

  return (
    <div className="mb-3 d-sm-flex justify-content-between">
      <div>
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={value}
          className="form-check-input"
          onChange={handleInputOnchange}
        />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me?
        </label>
      </div>
      <a href="forgot-password.html">Forgot password?</a>
    </div>
  );
};

const propsAreEqual = (
  prevProps: RememberMeProps,
  nextProps: RememberMeProps,
) => {
  return isEqual(prevProps, nextProps) && prevProps.value === nextProps.value;
};

export default memo(RememberMe, propsAreEqual);
