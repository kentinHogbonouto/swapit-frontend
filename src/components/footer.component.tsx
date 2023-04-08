import React from "react";

const Footer = () => {
  return (
    <footer id="footer-container">
      <div className="container-fluid">
        <div className="row justify-content-evenly">
          <div className="col-2">
            <h3>About us</h3>
            <ul>
              <li>
                <a href="#">About swapit</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Terms & conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Billing Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Copyright infringement Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Support@swapit.com</a>
              </li>
              <li>
                <a href="#">Safety tips</a>
              </li>
              <li>
                <a href="#">Contacts us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Our ressouces</h3>
            <ul>
              <li>
                <a href="#">Our blog</a>
              </li>
              <li>
                <a href="#">Swapit on FB</a>
              </li>
              <li>
                <a href="#">Our instagram</a>
              </li>
              <li>
                <a href="#">Our tiktok</a>
              </li>
              <li>
                <a href="#">Our youtube</a>
              </li>
              <li>
                <a href="#">Our twitter</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Hot links</h3>
            <ul>
              <li>
                <a href="#">Brand</a>
              </li>
              <li>
                <a href="#">Regions</a>
              </li>
              <li>
                <a href="#">Swapit Africa</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
