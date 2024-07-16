import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark pt-5">
        <div className="container">
          {/* <!-- Row START --> */}
          <div className="row g-4">
            {/* <!-- Widget 1 START --> */}
            <div className="col-lg-3">
              {/* <!-- logo --> */}
              <a href="index.html">
                <img
                  className="h-40px"
                  src="assets/images/logo-light.svg"
                  alt="logo"
                />
              </a>
              <p className="my-3 text-muted">
                Departure defective arranging rapturous did believe him all had
                supported.
              </p>
              <p className="mb-2">
                <a href="#" className="text-muted text-primary-hover">
                  <i className="bi bi-telephone me-2"></i>+1234 568 963
                </a>
              </p>
              <p className="mb-0">
                <a href="#" className="text-muted text-primary-hover">
                  <i className="bi bi-envelope me-2"></i>example@gmail.com
                </a>
              </p>
            </div>
            {/* <!-- Widget 1 END --> */}

            {/* <!-- Widget 2 START --> */}
            <div className="col-lg-8 ms-auto">
              <div className="row g-4">
                {/* <!-- Link block --> */}
                <div className="col-6 col-md-3">
                  <h5 className="text-white mb-2 mb-md-4">Page</h5>
                  <ul className="nav flex-column text-primary-hover">
                    <li className="nav-item">
                      <a className="nav-link text-muted" href="#">
                        About us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-muted" href="#">
                        Contact us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-muted" href="#">
                        News and Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-muted" href="#">
                        Meet a Team
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Other link blocks follow... */}
              </div>
            </div>
            {/* <!-- Widget 2 END --> */}
          </div>
          {/* </div><!-- Row END --> */}

          {/* <!-- Tops Links --> */}
          <div className="row mt-5">{/* Top links content */}</div>

          {/* <!-- Payment and card --> */}
          <div className="row g-4 justify-content-between mt-0 mt-md-2">
            {/* Payment card and social media icon content */}
          </div>

          {/* <!-- Divider --> */}
          <hr className="mt-4 mb-0" />

          {/* <!-- Bottom footer --> */}
          <div className="row">
            <div className="container">
              <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
                {/* copyright text and links */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
