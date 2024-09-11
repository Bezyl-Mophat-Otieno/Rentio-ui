"use client";
import { useState } from "react";
import TextField from "@/components/common/TextField";
import { UserSignInSchema } from "@/types/schemas/auth-schema";
import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";
import SocialButton from "@/components/common/SocialButton";
import { SignInState, FormFieldUpdate } from "@/types/auth-types";
import { useLogin } from "@/hooks/react-query/mutations/auth/useLogin";
import Alert from "@/components/common/Alert";
import ProgressBar from "@/components/common/ProgressBar";
import { getLoginErrorMessage } from "@/errors/custom-error-messages";
import Link from "next/link";

const SignInForm = () => {
  const initialState: SignInState = {
    formData: {
      email: "",
      password: "",
    },
    touchedFields: {
      email: false,
      password: false,
    },
    errors: {
      email: [],
      password: [],
    },
    disabled: true,
  };

  const [state, setState] = useState<SignInState>(initialState);

  const { formData, errors, disabled } = state;

  const handleFieldChange = (name: string, value: any) => {
    setState((prevState) => {
      const updatedFormData = { ...prevState.formData, [name]: value };
      const updatedTouchedFields = prevState.touchedFields;

      // Perform validation only if the field was already touched
      if (updatedTouchedFields[name as keyof SignInState["touchedFields"]]) {
        const result = UserSignInSchema.safeParse(updatedFormData);

        if (!result.success) {
          return {
            ...prevState,
            formData: updatedFormData,
            errors: {
              ...prevState.errors,
              [name]:
                result.error.flatten().fieldErrors[
                  name as keyof SignInState["errors"]
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
      const result = UserSignInSchema.safeParse(prevState.formData);

      if (!result.success) {
        return {
          ...prevState,
          touchedFields: updatedTouchedFields,
          errors: {
            ...prevState.errors,
            [name]:
              result.error.flatten().fieldErrors[
                name as keyof SignInState["errors"]
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

  const { mutate: login, error, isError, isPending, isSuccess } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <>
      <p className="mb-0">
        New here? <Link href="/auth/sign-up">Create an account</Link>
      </p>
      <form className="mt-4 text-start" onSubmit={handleSubmit}>
        {(isSuccess || isError) && (
          <Alert
            type={isSuccess ? "success" : "danger"}
            message={
              isSuccess
                ? "You have successfully logged in."
                : getLoginErrorMessage(error)
            }
          />
        )}

        {isPending && <ProgressBar />}

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
        <Button label="Login" type="submit" disabled={disabled} />
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
    </>
  );
};

export default SignInForm;
