import React from "react";
import Image from "next/image";
import SignInWidget from "@/widgets/modules/sign-in/SignInWidget";

function SignIn() {
  return (
    <>
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
                    <SignInWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======================= */}
        {/* Main Content END --> */}
      </main>
    </>
  );
}

export default SignIn;
