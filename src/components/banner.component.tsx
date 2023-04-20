import React from "react";
import Image from "next/image";
import promotionImage from "../public/images/promotion_bg.png";

const Banner = () => {
  return (
    <div className="container-fluid banner-container">
      <div className="row">
        <div className="col-lg-12">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src="/images/promotion_bg.png" className="d-block w-100" alt="..." width={500} height={500}/>
              </div>
              <div className="carousel-item">
                <Image src="/images/promotion_bg.png" className="d-block w-100" alt="..." width={500} height={500}/>
              </div>
              <div className="carousel-item">
                <Image src="/images/promotion_bg.png" className="d-block w-100" alt="..." width={500} height={500}/>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
