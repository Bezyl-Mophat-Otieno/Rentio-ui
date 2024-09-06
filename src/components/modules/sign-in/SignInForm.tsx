"use client";
import { UserSignIn } from "@/types/auth-types";
import TextField from "@/components/common/TextField";
import { UserSignInSchema } from "@/types/schemas/auth-schema";
import { useState, useEffect, use } from "react";
import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";
import SocialButton from "@/components/common/SocialButton";
import { SignInState, FormFieldUpdate } from "@/types/auth-types";
import Checkbox from "@/components/common/Checkbox";

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
    console.log(key, name, value);
    setState((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [name]: value,
      },
    }));
  };

  const { formData, errors } = state;

  // useEffect(() => {
  //   const result = UserSignInSchema.safeParse(formData);
  //   if (!result.success) {
  //     setState((prev) => ({
  //       ...prev,
  //       errors: {
  //         ...prev.errors,
  //         ...result.error.flatten().fieldErrors,
  //       },
  //     }));
  //   }
  // }, [JSON.stringify(formData)]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log(errors);
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
      <Checkbox
        labelText="Remember me"
        id="rememberMe"
        name="rememberMe"
        errors={errors.rememberMe}
        checked={formData.rememberMe}
        updateParentState={updateParentState}
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
