import React from "react";
import Image from "next/image";

function SignIn() {
  return (
    <>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <main>
        {/* <!-- ======================= */}
        {/* Main Content START --> */}
        <section className="vh-xxl-100">
          <div className="container h-100 d-flex px-0 px-sm-4">
            <div className="row justify-content-center align-items-center m-auto">
              <div className="col-12">
                <div className="bg-mode shadow rounded-3 overflow-hidden">
                  <div className="row g-0">
                    {/* <!-- Vector Image --> */}
                    <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                      <div className="p-3 p-lg-5">
                        <Image
                          className="img-fluid"
                          src="/assets/images/element/signin.svg"
                          alt="Sign in"
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
                        <h1 className="mb-2 h3">Welcome back</h1>
                        <p className="mb-0">
                          New here?<a href="sign-up.html"> Create an account</a>
                        </p>

                        {/* <!-- Form START --> */}
                        <form className="mt-4 text-start">
                          {/* <!-- Email --> */}
                          <div className="mb-3">
                            <label className="form-label">Enter email id</label>
                            <input type="email" className="form-control" />
                          </div>
                          {/* <!-- Password --> */}
                          <div className="mb-3 position-relative">
                            <label className="form-label">Enter password</label>
                            <input
                              className="form-control fakepassword"
                              type="password"
                              id="psw-input"
                            />
                            <span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                              <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                            </span>
                          </div>
                          {/* <!-- Remember me --> */}
                          <div className="mb-3 d-sm-flex justify-content-between">
                            <div>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberCheck"
                              />
                              <label className="form-check-label">
                                Remember me?
                              </label>
                            </div>
                            <a href="forgot-password.html">Forgot password?</a>
                          </div>
                          {/* <!-- Button --> */}
                          <div>
                            <button
                              type="submit"
                              className="btn btn-primary w-100 mb-0"
                            >
                              Login
                            </button>
                          </div>

                          {/* <!-- Divider --> */}
                          <div className="position-relative my-4">
                            <hr />
                            <p className="small bg-mode position-absolute top-50 start-50 translate-middle px-2">
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
        {/* <!-- ======================= */}
        {/* Main Content END --> */}
      </main>
      {/* <!-- **************** MAIN CONTENT END **************** --> */}
    </>
  );
}

export default SignIn;
