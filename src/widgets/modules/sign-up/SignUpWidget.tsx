import React from "react";
import Image from "next/image";
import SignUpForm from "@/components/modules/sign-up/SignUpForm";
import AuthLayout from "@/layouts/auth/layout";
import Link from "next/link";

function SignUpWidget() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}

export default SignUpWidget;
