"use client";
import { useState } from "react";
import { UserSignUp } from "@/types/auth-types";
import Divider from "@/components/common/Divider";
import TextField from "@/components/common/TextField";
import SocialButton from "@/components/common/SocialButton";
import { RoleEnum } from "@/types/enums/auth-enums";
import Button from "@/components/common/Button";
import { SignupState, FormFieldUpdate } from "@/types/auth-types";
import RadioButton from "@/components/common/RadioButton";

const SignUpForm = () => {
  const roles = [
    { value: RoleEnum.Admin, labelText: "System Admin" },
    { value: RoleEnum.HouseAgent, labelText: "House Agent" },
    { value: RoleEnum.HouseLandlord, labelText: "House Landlord" },
    { value: RoleEnum.Tenant, labelText: "Tenant" },
    { value: RoleEnum.ServiceProvider, labelText: "Service Provider" },
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
      <TextField
        labelText="Enter your email address."
        id="email"
        name="email"
        type="email"
        errors={errors.email}
        value={formData.email}
        updateParentState={updateParentState}
      />
      <TextField
        labelText="Enter your password."
        id="password"
        name="password"
        type="password"
        errors={errors.password}
        value={formData.password}
        updateParentState={updateParentState}
      />
      <TextField
        labelText="Confirm your password."
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        errors={errors.password}
        value={formData.confirmPassword}
        updateParentState={updateParentState}
      />

      <div className="form-check">
        <label className="form-label">Select your role</label>
        {roles.map((role, index) => (
          <RadioButton
            id="role"
            name="role"
            key={index}
            value={formData.role}
            labelText={role.labelText}
            errors={errors.role}
            updateParentState={updateParentState}
          />
        ))}
      </div>

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
