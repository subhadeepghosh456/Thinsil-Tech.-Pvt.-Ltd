import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const ProductDetails = () => {
  const obj = useLocation();
  console.log(obj?.state);
  return (
    <div className="details">
      <Header />
      <div className="image-wrapper">
        <img src={obj?.state.image} alt="" className="card-image-container" />
      </div>
      <div className="content-details">
        <p>category :{obj?.state.category}</p>
        <p>description:{obj?.state.description}</p>
        <p>Price:${obj?.state.price}</p>
        <p>Title:{obj?.state.title}</p>
        <p>
          Rating {obj?.state.rating.rate} out of {obj?.state.rating.count}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
