import React from "react";
import SignInForm from "@/components/modules/sign-in/SignInForm";
import Image from "next/image";
import Link from "next/link";
import AuthLayout from "@/layouts/auth/layout";

function SignInWidget() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}

export default SignInWidget;
