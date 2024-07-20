import React from "react";
import Image from "next/image";

function ForgotPassword() {
  return (
    <>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <main>
        {/* Main Content START --> */}
        <section className="vh-xxl-100">
          <div className="container h-100 d-flex px-0 px-sm-4">
            <div className="row justify-content-center align-items-center m-auto">
              <div className="col-12">
                <div className="bg-mode shadow rounded-3 overflow-hidden">
                  <div className="row g-0">
                    {/* <!-- Vector Image --> */}
                    <div className="col-lg-6 d-md-flex align-items-center order-2 order-lg-1">
                      <div className="p-3 p-lg-5">
                        <Image
                          className="img-fluid"
                          src="/assets/images/element/forgot-pass.svg"
                          alt="Forgot password"
                          width={500}
                          height={500}
                        />
                      </div>
                      {/* <!-- Divider --> */}
                      <div className="vr opacity-1 d-none d-lg-block"></div>
                    </div>

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
                        <h1 className="mb-2 h3">Forgot password?</h1>
                        <p className="mb-sm-0">
                          Enter the email address associated with an account.
                        </p>

                        {/* <!-- Form START --> */}
                        <form className="mt-sm-4 text-start">
                          {/* <!-- Email --> */}
                          <div className="mb-3">
                            <label className="form-label">Enter email id</label>
                            <input type="email" className="form-control" />
                          </div>

                          <div className="mb-3 text-center">
                            <p>
                              Back to <a href="sign-in.html">Sign in</a>
                            </p>
                          </div>

                          {/* <!-- Button --> */}
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                              Reset Password
                            </button>
                          </div>

                          {/* <!-- Divider --> */}
                          <div className="position-relative my-4">
                            <hr />
                            <p className="small position-absolute top-50 start-50 translate-middle bg-mode px-2">
                              Or sign in with
                            </p>
                          </div>

                          {/* <!-- Google and facebook button --> */}
                          <div className="vstack gap-3">
                            <a href="#" className="btn btn-light mb-0">
                              <i className="fab fa-fw fa-google text-google-icon me-2"></i>
                              Sign in with Google
                            </a>
                            <a href="#" className="btn btn-light mb-0">
                              <i className="fab fa-fw fa-facebook-f text-facebook me-2"></i>
                              Sign in with Facebook
                            </a>
                          </div>

                          {/* <!-- Copyright --> */}
                          <div className="text-primary-hover mt-3 text-center">
                            {" "}
                            Copyrights ©2023 Booking. Build by{" "}
                            <a href="https://www.webestica.com/">
                              Webestica
                            </a>.{" "}
                          </div>
                        </form>
                        {/* <!-- Form END --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Content END --> */}
      </main>
      {/* <!-- **************** MAIN CONTENT END **************** --> */}
    </>
  );
}

export default ForgotPassword;
