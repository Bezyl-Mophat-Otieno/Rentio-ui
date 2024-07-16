import React from "react";

function BackToTop() {
  return (
    <>
      <div className="back-top"></div>

      {/* <!-- Navbar mobile START --> */}
      <div className="navbar navbar-mobile">
        <ul className="navbar-nav">
          {/* <!-- Nav item Home --> */}
          <li className="nav-item">
            <a className="nav-link active" href="index.html">
              <i className="bi bi-house-door"></i>
              <span className="mb-0 nav-text">Home</span>
            </a>
          </li>

          {/* <!-- Nav item My Trips --> */}
          <li className="nav-item">
            <a className="nav-link" href="account-bookings.html">
              <i className="bi bi-briefcase"></i>
              <span className="mb-0 nav-text">My Trips</span>
            </a>
          </li>

          {/* <!-- Nav item Offer --> */}
          <li className="nav-item">
            <a className="nav-link" href="offer-detail.html">
              <i className="bi bi-percent"></i>
              <span className="mb-0 nav-text">Offer</span>
            </a>
          </li>

          {/* <!-- Nav item Account --> */}
          <li className="nav-item">
            <a className="nav-link" href="account-profile.html">
              <i className="bi bi-person-circle"></i>
              <span className="mb-0 nav-text">Account</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BackToTop;
