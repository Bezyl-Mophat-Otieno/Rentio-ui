"use client";
import { UserSignIn } from "@/types/auth-types";
import { UserSignInSchema } from "@/types/schemas/auth-schema";
import { useState, useEffect, use } from "react";
import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";
import EmailInput from "@/components/modules/form/EmailInput";
import PasswordInput from "@/components/modules/form/PasswordInput";
import RememberMe from "@/components/modules/form/RememberMe";
import SocialButton from "@/components/common/SocialButton";
import { SignInState, FormFieldUpdate } from "@/types/auth-types";

const SignInForm = () => {
  const initialState: SignInState = {
    formData: {
      email: "",
      password: "",
      rememberMe: false,
    },
    touchedFields: {
      email: false,
      password: false,
      rememberMe: false,
    },
    errors: {
      email: [],
      password: [],
      rememberMe: [],
    },
  };

  const [state, setState] = useState<SignInState>(initialState);

  const updateParentState = (
    key: keyof SignInState,
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

  useEffect(() => {
    const result = UserSignInSchema.safeParse(formData);
    if (!result.success) {
      setState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          ...result.error.flatten().fieldErrors,
        },
      }));
    }
  }, [JSON.stringify(formData)]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log(errors);
  };

  return (
    <form className="mt-4 text-start" onSubmit={handleSubmit}>
      <EmailInput
        errors={errors.email}
        updateParentState={updateParentState}
        value={formData.email}
      />
      <PasswordInput
        updateParentState={updateParentState}
        errors={errors.password}
        title="Enter password."
        name="password"
        value={formData.password}
      />
      <RememberMe
        updateParentState={updateParentState}
        value={formData.rememberMe}
      />
      <Button label="Login" type="submit" />
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

export default SignInForm;
