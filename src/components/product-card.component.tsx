import React from "react";
import ReactStars from 'react-stars'

const ProductCard = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1611972169723-1c3c3e2c2d6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        className="card-img-top"
        alt="..."
      />
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
         
        <div>
        <img 
        src="https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="card-img-chair" 
        alt="img-chair" 
        height="200"
        width="200"/>
        <div>
         <h5 className="card-title">Brown & White Wooden Lounge
          </h5>
          <ReactStars
            count={5}
            size={20}
            color2={'#ffd700'} />
         </div>
        </div>
        </div>
          <br/>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
  );
};

export default ProductCard;