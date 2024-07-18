import React from "react";
import Image from "next/image";

function TwoFactorAuthentication() {
  return (
    <>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <main>
        {/* Main Content START --> */}
        <section className="vh-xxl-100">
          <div className="container h-100 d-flex px-0 px-sm-4">
            <div className="row justify-content-center align-items-center m-auto">
              <div className="col-12">
                <div className="shadow bg-mode rounded-3 overflow-hidden">
                  <div className="row g-0 align-items-center">
                    {/* <!-- Vector Image --> */}
                    <div className="col-lg-6 d-md-flex align-items-center order-2 order-lg-1">
                      <div className="p-3 p-lg-5">
                        <Image
                          className="img-fluid"
                          src="/assets/images/element/forgot-pass.svg"
                          alt="Two factor authentication"
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
                        <h1 className="mb-2 h3">Two factor authentication</h1>
                        <p className="mb-sm-0">
                          We have to send a code to <b>example@gmail.com</b>
                        </p>

                        {/* <!-- Form START --> */}
                        <form className="mt-sm-4">
                          {/* <!-- Input box --> */}
                          <p className="mb-1">
                            Enter the code we have sent you:
                          </p>
                          <div className="autotab d-flex justify-content-between gap-1 gap-sm-3 mb-2">
                            <input
                              type="text"
                              maxLength={1}
                              className="form-control text-center p-3"
                            />
                            <input
                              type="text"
                              maxLength={1}
                              className="form-control text-center p-3"
                            />
                            <input
                              type="text"
                              maxLength={1}
                              className="form-control text-center p-3"
                            />
                            <input
                              type="text"
                              maxLength={1}
                              className="form-control text-center p-3"
                            />
                          </div>

                          {/* <!-- Button link --> */}
                          <div className="d-sm-flex justify-content-between small mb-4">
                            <span>Don&apos;t get a code?</span>
                            <a
                              href="#"
                              className="btn btn-sm btn-link p-0 text-decoration-underline mb-0"
                            >
                              Click to resend
                            </a>
                          </div>

                          {/* <!-- Button --> */}
                          <div>
                            <button
                              type="submit"
                              className="btn btn-primary w-100 mb-0"
                            >
                              Verify and Process
                            </button>
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

      {/* <!-- Back to top --> */}
      <div className="back-top"></div>
    </>
  );
}

export default TwoFactorAuthentication;
