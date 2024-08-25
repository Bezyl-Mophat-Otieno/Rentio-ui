"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";
import EmailInput from "@/components/modules/form/EmailInput";
import PasswordInput from "@/components/modules/form/PasswordInput";
import RememberMe from "@/components/modules/form/RememberMe";
import SocialButton from "@/components/common/SocialButton";

type SignInFormInputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const onSubmit: SubmitHandler<SignInFormInputs> = (data) => {
    console.log("Form submitted:", data);
    // Handle sign-in logic
  };

  return (
    <form className="mt-4 text-start" onSubmit={handleSubmit(onSubmit)}>
      <EmailInput register={register} errors={errors} />
      <PasswordInput
        register={register}
        errors={errors}
        title="Enter password."
        name="password"
      />
      <RememberMe register={register} />
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
