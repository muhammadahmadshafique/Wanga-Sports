/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React, { useRef } from "react";
// import "./Assets/css/bootstrap.min.css";
import "../../Assets/css/bootstrap.min.css"
// import "../../../Assets/css/bootstrap.min.css"
import "../../Assets/vendors/menu/src/main.menu.css";
import "../../Assets/css/style.css";
import "../../Assets/css/utilities.css";
import "../../Assets/css/colors.css";
import "../../Assets/vendors/animate/animate.css";

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props) => {


  const footerRef = useRef(null);
  var footerHeight = footerRef.current?.clientHeight;

  const headerRef = useRef(null);
  var headerHeight = headerRef.current?.clientHeight;

  var sectionHeight = window.innerHeight - (headerHeight + footerHeight);

  return (
    <>
      {/* <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">YANGA Station Management Software</a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            </Navbar>
            <h5><center>{ isAuthenticated ? 'Welcome within the Yanga SMS'  : 'Welcome at the Yanga SMS. Use your yanga credentials to login.' }</center></h5>
            <br />
            <br />
            {props.children} */}

      <div
        ref={headerRef}
        className="main-header header-shadow purple-header bg-orange main_header"
      >
        <div className="container">
          <div className="main-header-container">
            <div className="logo">
              <a href="index.html">
                <img
                  src={require("../../Assets/images/logo/logo-dark.svg").default}
                />
              </a>
            </div>

            <div className="burger-menu">
              <div className="line-menu line-half first-line"></div>
              <div className="line-menu"></div>
              <div className="line-menu line-half last-line"></div>
            </div>

            <nav className="main-menu menu-caret submenu-top-border submenu-scale">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section
        style={{ height: sectionHeight }}
        className="main-section pt-50 pb-50 overlay-wrap"
      >
        <div className="container overlay-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="match-height floating_image">
                <img
                  className="img_1 appear-animation"
                  data-appear-animation="bounceIn"
                  data-appear-animation-delay="0"
                  data-appear-animation-duration="1s"
                  // src={require("./Assets/images/pineapple-1.png").default}
                  src={require("../../Assets/images/pineapple-1.png").default}
                />
                <img
                  className="img_2 appear-animation"
                  data-appear-animation="bounceIn"
                  data-appear-animation-delay="0"
                  data-appear-animation-duration="1.5s"
                  // src={require("./Assets/images/pineapple-2.png").default}
                  src={require("../../Assets/images/pineapple-2.png").default}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="match-height d-flex align-items-center"
                style={{ "min-height": "450px" }}
              >
                <div>
                  <h1 className="text-bold-400 mb-0 text-uppercase">
                    Welcome At Yanga Sms
                  </h1>
                  <hr className="w--70 bs-solid bc-orange bw-s5 bt-0 bl-0 br-0 ml-0" />
                  <p className="text-dark text-bold-400 mt-10">
                    Sign-in To Manage The YANGA Hydration Station Configurations
                  </p>
                  <div className="pt-20">
                    {/* <SignInButton /> */}
                    {/* <a href="#" className="btn bg-orange text-white text-shadow-s1 text-uppercase text-bold-500 text-size-16 rounded-s4 pt-12 pb-12 pl-60 pr-60 b-0 hover-icon-wobble-horizontal mr-15">SIGN-IN</a> */}

                    <a
                      href="#"
                      className="btn bg-purple text-white text-shadow-s1 text-uppercase text-bold-500 text-size-16 rounded-s2 pt-7 pb-6 pl-30 pr-30 b-0 hover-icon-wobble-horizontal"
                    >
                      HELP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer ref={footerRef} className="bg-white pt-s1 pb-s1 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="mt-s2 mb-s2">
                <p className="m-0">
                  &copy; Copyright 2022 JNA Sportdrinks BV | All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default PageLayout;
