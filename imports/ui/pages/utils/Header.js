import React, { useState, useEffect } from "react";

import { FlowRouter } from "meteor/ostrio:flow-router-extra"

const Header = () => {

  


  return (
    <>
      <div id="Top" className="back-to-top-container">
        <div className="back-to-top-button-wrapper">
          <a href="#Top" className="button-circle bg-gray-3 w-inline-block">
            <img
              src="images/icon-arrow-up.svg"
              alt=""
              className="button-circle-icon"
            />
          </a>
        </div>
      </div>
      <div className="navbar-wrapper sticky-top">
        <div className="container">
          <div
            data-collapse="medium"
            data-animation="default"
            data-duration="400"
            className="navbar-permanent w-nav"
          >
            <div className="navbar-row">
              <div>
                <a href="/" className="navbar-1-brand w-nav-brand">
                  <h3 className="brand">
                    <span className="contain text-span-5">Lyrics</span>Timeline
                  </h3>
                </a>
              </div>
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;