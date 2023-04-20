import React from "react";
import ReactStars from "react-stars";

const ProductCard = () => {
  return (
    <div className="col-lg-3 py-2">
      <div className="card">
        <img
          src="https://img.freepik.com/free-vector/wicker-hanging-chairs-swing-hanging-chain-with-cushions_1284-45541.jpg?size=626&ext=jpg&ga=GA1.2.819716268.1681813828&semt=ais"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
