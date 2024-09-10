"use client";
import { useState } from "react";
import { UserSignUpSchema } from "@/types/schemas/auth-schema";
import Divider from "@/components/common/Divider";
import TextField from "@/components/common/TextField";
import SocialButton from "@/components/common/SocialButton";
import { RoleEnum } from "@/types/enums/auth-enums";
import Button from "@/components/common/Button";
import { SignupState } from "@/types/auth-types";
import RadioButton from "@/components/common/RadioButton";
import Alert from "@/components/common/Alert";
import { getLoginErrorMessage } from "@/errors/custom-error-handling";
import { useRegister } from "@/hooks/react-query/auth/useRegister";
import ProgressBar from "@/components/common/ProgressBar";
import Link from "next/link";

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
      roleId: RoleEnum.Tenant,
    },
    touchedFields: {
      email: false,
      password: false,
      confirmPassword: false,
      roleId: false,
    },
    errors: {
      email: [],
      password: [],
      confirmPassword: [],
      roleId: [],
    },
    disabled: true,
  };

  const [state, setState] = useState<SignupState>(initialState);

  const { formData, errors, disabled } = state;

  const handleFieldChange = (name: string, value: any) => {
    setState((prevState) => {
      const updatedFormData = { ...prevState.formData, [name]: value };
      const updatedTouchedFields = prevState.touchedFields;

      // Perform validation only if the field was already touched
      if (updatedTouchedFields[name as keyof SignupState["touchedFields"]]) {
        const result = UserSignUpSchema.safeParse(updatedFormData);

        if (!result.success) {
          return {
            ...prevState,
            formData: updatedFormData,
            errors: {
              ...prevState.errors,
              [name]:
                result.error.flatten().fieldErrors[
                  name as keyof SignupState["errors"]
                ],
            },
            disabled: true,
          };
        }

        return {
          ...prevState,
          formData: updatedFormData,
          errors: { ...prevState.errors, [name]: [] },
          disabled: false,
        };
      }
      // Just update the form data if the field hasn't been touched yet
      return { ...prevState, formData: updatedFormData };
    });
  };

  // Handle blur and mark the field as touched, validating all touched fields
  const handleFieldBlur = (name: string) => {
    setState((prevState) => {
      const updatedTouchedFields = {
        ...prevState.touchedFields,
        [name]: true,
      };
      const result = UserSignUpSchema.safeParse(prevState.formData);

      if (!result.success) {
        return {
          ...prevState,
          touchedFields: updatedTouchedFields,
          errors: {
            ...prevState.errors,
            [name]:
              result.error.flatten().fieldErrors[
                name as keyof SignupState["errors"]
              ],
          },
          disabled: true,
        };
      }

      return {
        ...prevState,
        touchedFields: updatedTouchedFields,
        errors: { ...prevState.errors, [name]: [] },
        disabled: false,
      };
    });
  };

  const {
    isPending,
    isError,
    isSuccess,
    mutate: register,
    error,
  } = useRegister();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <>
      <p className="mb-0">
        Already a member? <Link href="/auth/sign-in">Sign in</Link>
      </p>
      <form className="mt-4 text-start" onSubmit={handleSubmit}>
        {isPending && <ProgressBar />}
        {(isError || isSuccess) && (
          <Alert
            type={isSuccess ? "success" : "danger"}
            message={
              isSuccess
                ? "User successfully registered"
                : getLoginErrorMessage(error)
            }
          />
        )}

        <TextField
          onBlur={handleFieldBlur}
          onChange={handleFieldChange}
          labelText="Enter your email address."
          id="email"
          name="email"
          type="email"
          errors={errors.email}
          value={formData.email}
        />
        <TextField
          onBlur={handleFieldBlur}
          onChange={handleFieldChange}
          labelText="Enter your password."
          id="password"
          name="password"
          type="password"
          errors={errors.password}
          value={formData.password}
        />
        <TextField
          onBlur={handleFieldBlur}
          onChange={handleFieldChange}
          labelText="Confirm your password."
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          errors={errors.confirmPassword}
          value={formData.confirmPassword}
        />

        <div className="form-check">
          <label className="form-label">Select your role</label>
          {roles.map((role: any, index: any) => (
            <RadioButton
              id="roleId"
              name="roleId"
              key={index}
              value={role.value}
              labelText={role.labelText}
              errors={errors.roleId}
              onBlur={handleFieldBlur}
              onChange={handleFieldChange}
            />
          ))}
        </div>

        <Button label="Create Account" type="submit" disabled={disabled} />
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
          Copyrights ©2024 Booking. Build by{"Mophat.LLC"}
          <a href="https://www.webestica.com/">Webestica</a>.
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
