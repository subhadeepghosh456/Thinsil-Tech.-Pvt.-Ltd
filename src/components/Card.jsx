import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItems } from "../utils/cartSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  // subscribe to redux store
  const total_data = useSelector((store) => store.cart.items);
  const handleAddToCart = (obj) => {
    dispatch(addItems(obj));
  };
  return (
    <div className="card-image-container">
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Title:{item.title}</h3>
        <h3 className="card-title">Category:{item.category}</h3>
        <p className="card-price">${item.price}</p>
        {/* if item added to the cart then show added to cart button otherwise show  Add to Cart */}
        <div className="btn-container">
          {total_data.some((cart) => cart.id === item.id) ? (
            <button className="added_to_cart">Added to cart</button>
          ) : (
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart({ ...item, qty: 1 })}
            >
              Add to Cart
            </button>
          )}
          <Link to={"/details"} state={item}>
            <button className="add-to-cart-button">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
