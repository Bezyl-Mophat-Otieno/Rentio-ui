import React from "react";
import SignInForm from "@/components/modules/sign-in/SignInForm";
import Image from "next/image";

function SignInWidget() {
  return (
    <>
      {/* <!-- Information --> */}
      <div className="col-lg-6 order-1">
        <div className="p-4 p-sm-7">
          {/* <!-- Logo --> */}
          <a href="index.html">
            <Image
              src="/assets/images/logo-icon.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </a>
          {/* <!-- Title --> */}
          <h1 className="mb-2 h3">Welcome back</h1>
          <p className="mb-0">
            New here?<a href="sign-up.html"> Create an account</a>
          </p>
          {/* <!-- Form --> */}
          <SignInForm />
        </div>
      </div>
    </>
  );
}

export default SignInWidget;
