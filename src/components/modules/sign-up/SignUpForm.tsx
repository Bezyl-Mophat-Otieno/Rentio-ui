"use client";
import { useState } from "react";
import { UserSignUp } from "@/types/auth-types";
import Divider from "@/components/common/Divider";
import EmailInput from "@/components/modules/form/EmailInput";
import PasswordInput from "@/components/modules/form/PasswordInput";
import SocialButton from "@/components/common/SocialButton";
import RadioButtonSelection from "@/components/modules/form/RadioButtonSelection";
import { RoleEnum } from "@/types/enums/auth-enums";
import Button from "@/components/common/Button";
import { SignupState, FormFieldUpdate } from "@/types/auth-types";

const SignUpForm = () => {
  const roles = [
    { value: RoleEnum.Admin, label: "System Admin" },
    { value: RoleEnum.HouseAgent, label: "House Agent" },
    { value: RoleEnum.HouseLandlord, label: "House Landlord" },
    { value: RoleEnum.Tenant, label: "Tenant" },
    { value: RoleEnum.ServiceProvider, label: "Service Provider" },
  ];

  const initialState: SignupState = {
    formData: {
      email: "",
      password: "",
      confirmPassword: "",
      role: RoleEnum.Tenant,
    },
    touchedFields: {
      email: false,
      password: false,
      confirmPassword: false,
      role: false,
    },
    errors: {
      email: [],
      password: [],
      confirmPassword: [],
      role: [],
    },
  };

  const [state, setState] = useState<SignupState>(initialState);

  const updateParentState = (
    key: keyof SignupState,
    { name, value }: FormFieldUpdate,
  ) => {
    setState((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [name]: value,
      },
    }));
  };

  const { formData, errors } = state;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="mt-4 text-start" onSubmit={handleSubmit}>
      <EmailInput
        errors={errors.email}
        value={formData.email}
        updateParentState={updateParentState}
      />
      <PasswordInput
        value={formData.password}
        updateParentState={updateParentState}
        errors={errors.password}
        title="Enter password."
        name="password"
      />
      <PasswordInput
        updateParentState={updateParentState}
        errors={errors.confirmPassword}
        value={formData.confirmPassword}
        title="Confirm password."
        name="confirmPassword"
      />
      <RadioButtonSelection
        updateParentState={updateParentState}
        errors={errors.role}
        value={formData.role}
        roles={roles}
        name="role"
        label="Select Your Profile"
      />
      <Button label="Create Account" type="submit" />
      <Divider />
      <div className="vstack gap-3">
        <SocialButton
          platform="Google"
          iconClass="fa-google text-google-icon"
          onClick={() => {}}
        />
        <SocialButton
          platform="Facebook"
          iconClass="fa-facebook-f text-facebook"
          onClick={() => {}}
        />
      </div>
      <div className="text-primary-hover mt-3 text-center">
        Copyrights ©2023 Booking. Build by{" "}
        <a href="https://www.webestica.com/">Webestica</a>.
      </div>
    </form>
  );
};

export default SignUpForm;
