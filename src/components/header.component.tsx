import React from "react";
import Syles from "./header.module.css";

const Header = () => {
  return (
    <header id="header-container">
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid justify-content-around">
          <a className="navbar-brand" href="#">
            Icon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav ${Syles.navItemContainer}`}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Sell more fast, buy wisely !
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-between">
                <a className="nav-link" href="#">
                  Sign in
                </a> |
                <a className="nav-link" href="#">
                  Registration
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary" href="#">
                  Sell
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
