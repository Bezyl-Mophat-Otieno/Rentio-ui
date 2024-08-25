"use client";
import Divider from "../../common/Divider";
import EmailInput from "../../modules/form/EmailInput";
import PasswordInput from "../../modules/form/PasswordInput";
import SocialButton from "../../common/SocialButton";
import RadioButtonSelection from "../form/RadioButtonSelection";
import Button from "../../common/Button";
import { useForm, SubmitHandler } from "react-hook-form";

type SignUpFormInput = {
  email: string;
  password: string;
  confirmpassword: string;
  role: string;
};
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInput>();

  const roles = [
    { value: "agent", label: "House Agent" },
    { value: "landlord", label: "House Landlord" },
    { value: "tenant", label: "Tenant" },
    { value: "provider", label: "Service Provider" },
  ];

  const onSubmit: SubmitHandler<SignUpFormInput> = (data) => {
    console.log("Form submitted:", data);
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
      <PasswordInput
        register={register}
        errors={errors}
        title="Confirm password."
        name="confirm-password"
      />
      <RadioButtonSelection
        register={register}
        errors={errors}
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
