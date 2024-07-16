import React from "react";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {
  return (
    // <!-- Header START -->
    <header className="navbar-dark header-sticky">
      {/* <!-- Logo Nav START --> */}
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          {/* <!-- Logo START --> */}
          <a className="navbar-brand" href="index.html">
            <img
              className="light-mode-item navbar-brand-item"
              src="assets/images/logo.svg"
              alt="logo"
            />
            <img
              className="dark-mode-item navbar-brand-item"
              src="assets/images/logo-light.svg"
              alt="logo"
            />
          </a>
          {/* <!-- Logo END --> */}

          {/* <!-- Responsive navbar toggler --> */}
          <button
            className="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="d-none d-sm-inline-block small">Menu</span>
          </button>

          {/* <!-- Responsive category toggler --> */}
          <button
            className="navbar-toggler ms-sm-auto mx-3 me-md-0 p-0 p-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCategoryCollapse"
            aria-controls="navbarCategoryCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-grid-3x3-gap-fill fa-fw"></i>
            <span className="d-none d-sm-inline-block small">Category</span>
          </button>

          {/* <!-- Main navbar START --> */}
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              {/* <!-- Nav item Listing --> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="listingMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Listings
                </a>
                <ul className="dropdown-menu" aria-labelledby="listingMenu">
                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Hotel
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index.html">
                          Hotel Home
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="index-hotel-chain.html"
                        >
                          Hotel Chain
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-resort.html">
                          Hotel Resort
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="hotel-grid.html">
                          Hotel Grid
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="hotel-list.html">
                          Hotel List
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="hotel-detail.html">
                          Hotel Detail
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="room-detail.html">
                          Room Detail
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="hotel-booking.html">
                          Hotel Booking
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Flight
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-flight.html">
                          Flight Home
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="flight-list.html">
                          Flight List
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="flight-detail.html">
                          Flight Detail
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="flight-booking.html">
                          Flight Booking
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Tour
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-tour.html">
                          Tour Home
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="tour-grid.html">
                          Tour Grid
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="tour-detail.html">
                          Tour Detail
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="tour-booking.html">
                          Tour Booking
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Cab
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-cab.html">
                          Cab Home
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="cab-list.html">
                          Cab List
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="cab-detail.html">
                          Cab Detail
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="cab-booking.html">
                          Cab Booking
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Directory
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="index-directory.html"
                        >
                          Directory Home
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="directory-detail.html"
                        >
                          Directory Detail
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Add Listing
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="join-us.html">
                          Join us
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="add-listing.html">
                          Add Listing
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="add-listing-minimal.html"
                        >
                          Add Listing Minimal
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="listing-added.html">
                          Listing Added
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Hero
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="hero-inline-form.html"
                        >
                          Hero Inline Form
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="hero-multiple-search.html"
                        >
                          Hero Multiple Search
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="hero-image-gallery.html"
                        >
                          Hero Image Gallery
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="hero-split.html">
                          Hero Split
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    {" "}
                    <a className="dropdown-item" href="booking-confirm.html">
                      Booking Confirmed
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="compare-listing.html">
                      Compare Listing
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="offer-detail.html">
                      Offer Detail
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Nav item Pages --> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="pagesMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                  <li>
                    {" "}
                    <a className="dropdown-item" href="about.html">
                      About
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="contact-2.html">
                      Contact 2
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="team.html">
                      Our Team
                    </a>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Authentication
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="sign-in.html">
                          Sign In
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="sign-up.html">
                          Sign Up
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="forgot-password.html"
                        >
                          Forgot Password
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="two-factor-auth.html"
                        >
                          Two factor authentication
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Blog
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="blog-detail.html">
                          Blog Detail
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Help
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="help-center.html">
                          Help Center
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="help-detail.html">
                          Help Detail
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="privacy-policy.html">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="terms-of-service.html"
                        >
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    {" "}
                    <a className="dropdown-item" href="pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="faq.html">
                      FAQs
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="error.html">
                      Error 404
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="coming-soon.html">
                      Coming Soon
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Nav item Account --> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="accounntMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accounts
                </a>
                <ul className="dropdown-menu" aria-labelledby="accounntMenu">
                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      User Profile
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="account-profile.html"
                        >
                          My Profile
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="account-bookings.html"
                        >
                          My Bookings
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="account-travelers.html"
                        >
                          Travelers
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="account-payment-details.html"
                        >
                          Payment Details
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="account-wishlist.html"
                        >
                          Wishlist
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="account-settings.html"
                        >
                          Settings
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="account-delete.html">
                          Delete Profile
                        </a>{" "}
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      Agent Dashboard
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="agent-dashboard.html"
                        >
                          Dashboard
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="agent-listings.html">
                          Listings
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="agent-bookings.html">
                          Bookings
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="agent-activities.html"
                        >
                          Activities
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="agent-earnings.html">
                          Earnings
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="agent-reviews.html">
                          Reviews
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="agent-settings.html">
                          Settings
                        </a>{" "}
                      </li>
                    </ul>
                  </li>

                  <li>
                    {" "}
                    <a className="dropdown-item" href="admin-dashboard.html">
                      Master Admin
                    </a>{" "}
                  </li>
                </ul>
              </li>

              {/* <!-- Nav item link--> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="advanceMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </a>
                <ul className="dropdown-menu min-w-auto" data-bs-popper="none">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://support.webestica.com/"
                      target="_blank"
                    >
                      <i className="text-warning fa-fw bi bi-life-preserver me-2"></i>
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="docs/index.html"
                      target="_blank"
                    >
                      <i className="text-danger fa-fw bi bi-card-text me-2"></i>
                      Documentation
                    </a>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://booking.webestica.com/rtl/"
                      target="_blank"
                    >
                      <i className="text-info fa-fw bi bi-toggle-off me-2"></i>
                      RTL demo
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://themes.getbootstrap.com/store/webestica/"
                      target="_blank"
                    >
                      <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>
                      Buy Booking!
                    </a>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="docs/alerts.html"
                      target="_blank"
                    >
                      <i className="text-orange fa-fw bi bi-puzzle-fill me-2"></i>
                      Components
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-- Main navbar END --> */}

          {/* <!-- Nav category menu START --> */}
          <div className="navbar-collapse collapse" id="navbarCategoryCollapse">
            <ul className="navbar-nav navbar-nav-scroll nav-pills-primary-soft text-center ms-auto p-2 p-xl-0">
              {/* <!-- Nav item Hotel --> */}
              <li className="nav-item">
                {" "}
                <a className="nav-link active" href="index.html">
                  <i className="fa-solid fa-hotel me-2"></i>Hotel
                </a>{" "}
              </li>

              {/* <!-- Nav item Flight --> */}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="index-flight.html">
                  <i className="fa-solid fa-plane me-2"></i>Flight
                </a>{" "}
              </li>

              {/* <!-- Nav item Tour --> */}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="index-tour.html">
                  <i className="fa-solid fa-globe-americas me-2"></i>Tour
                </a>{" "}
              </li>

              {/* <!-- Nav item Cabs --> */}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="index-cab.html">
                  <i className="fa-solid fa-car me-2"></i>Cab
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Nav category menu END --> */}

          {/* <!-- Profile and Notification START --> */}
          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
            {/* <!-- Notification dropdown START --> */}
            <li className="nav-item dropdown ms-0 ms-md-3">
              {/* <!-- Notification button --> */}
              <a
                className="nav-notification btn btn-light p-0 mb-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <i className="bi bi-bell fa-fw"></i>
              </a>
              {/* <!-- Notification dote --> */}
              <span className="notif-badge animation-blink"></span>

              {/* <!-- Notification dropdown menu START --> */}
              <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0">
                <div className="card bg-transparent">
                  {/* <!-- Card header --> */}
                  <div className="card-header bg-transparent d-flex justify-content-between align-items-center border-bottom">
                    <h6 className="m-0">
                      Notifications{" "}
                      <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                        4 new
                      </span>
                    </h6>
                    <a className="small" href="#">
                      Clear all
                    </a>
                  </div>

                  {/* <!-- Card body START --> */}
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush list-unstyled p-2">
                      {/* <!-- Notification item --> */}
                      <li>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action rounded notif-unread border-0 mb-1 p-3"
                        >
                          <h6 className="mb-2">
                            New! Booking flights from New York ✈️
                          </h6>
                          <p className="mb-0 small">
                            Find the flexible ticket on flights around the
                            world. Start searching today
                          </p>
                          <span>Wednesday</span>
                        </a>
                      </li>
                      {/* <!-- Notification item --> */}
                      <li>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action rounded border-0 mb-1 p-3"
                        >
                          <h6 className="mb-2">
                            Sunshine saving are here 🌞 save 30% or more on a
                            stay
                          </h6>
                          <span>15 Nov 2022</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Card body END --> */}

                  {/* <!-- Card footer --> */}
                  <div className="card-footer bg-transparent text-center border-top">
                    <a href="#" className="btn btn-sm btn-link mb-0 p-0">
                      See all incoming activity
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Notification dropdown menu END --> */}
            </li>
            {/* <!-- Notification dropdown END --> */}

            {/* <!-- Profile dropdown START --> */}
            <ProfileDropdown />
            {/* <!-- Profile dropdown END --> */}
          </ul>
          {/* <!-- Profile and Notification START --> */}
        </div>
      </nav>
      {/* <!-- Logo Nav END --> */}
    </header>
  );
}

export default Navbar;
