"use client";
import React from "react";
import Divider from "../../common/Divider";
import EmailInput from "../../modules/form/EmailInput";
import PasswordInput from "../../modules/form/PasswordInput";
import RememberMe from "../../modules/form/RememberMe";
import SocialButton from "../../common/SocialButton";
import Button from "../../common/Button";

const SignInForm: React.FC = () => {
  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle sign-in logic
    console.log("Form submitted");
  };

  return (
    <form className="mt-4 text-start" onSubmit={handleSignIn}>
      <EmailInput />
      <PasswordInput />
      <RememberMe />
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
