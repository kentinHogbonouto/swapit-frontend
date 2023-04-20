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
        src="https://img.freepik.com/free-vector/wicker-hanging-chairs-swing-hanging-chain-with-cushions_1284-45541.jpg?size=626&ext=jpg&ga=GA1.2.819716268.1681813828&semt=ais"
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

            <div>
              <img 
              src="https://img.freepik.com/premium-psd/headphone-mockup_187299-1061.jpg?w=740" 
              alt="img-headphones"
              className="card-img-headphone" 
              height= "200" 
              width= "200"             
              />
              <h5 className="card-title">PSD headphone
          </h5>
          <ReactStars
            count={5}
            size={20}
            color2={'#ffd700'} />
            <div>
              <img 
              src="https://img.freepik.com/free-photo/laptop-with-blank-black-screen-white-table_53876-97915.jpg?w=740&t=st=1681815167~exp=1681815767~hmac=363194417a64d5d032d566841a6485d139e0b9927bc749067d8e4967f7b23b03" 
              alt="img-laptop"
              className="card-img-laptop"
              height= "200"
              width="200"
              />
              <h5 className="card-title">Dell laptop
          </h5>
          <ReactStars
            count={5}
            size={20}
            color2={'#ffd700'} />
            </div>
         </div>
        </div>
        </div>
          <br/>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      </div>
  );
};

export default ProductCard;