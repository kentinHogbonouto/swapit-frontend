import React from "react";
import Styles from "./header.module.css";

const ProductCard = () => {
  return (
    <div className="card">
      <div className={`card-body ${Styles.productContainer}`}>
        <img
          src="https://images.unsplash.com/photo-1611972169723-1c3c3e2c2d6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
      <div className="card-footer text-center">
        <h5>Product Name</h5>
        <p>Product Price</p>
      </div>
    </div>
  );
};

export default ProductCard;
