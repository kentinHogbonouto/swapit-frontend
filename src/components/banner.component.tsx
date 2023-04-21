import React from "react";
import Image from "next/image";
import promotionImage from "../public/images/promotion_bg.png";

const Banner = () => {
  return (
    <div className="container-fluid banner-container">
      <div className="row banner-container">
        <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
          <small>Best Furniture For Your Castle....</small>
          <h1>New Furniture Collection Trends in 2023</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button type="submit" className="btn btn-danger">Shop Now</button>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img
            src="/images/sofa_promotional_header.png"
            alt=""
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
