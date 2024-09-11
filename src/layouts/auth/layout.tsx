import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="col-lg-6 order-1">
        <div className="p-4 p-sm-7">
          <a href="index.html">
            <Image
              src="/assets/images/logo-icon.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </a>
          <h1 className="mb-2 h3">Welcome back</h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
