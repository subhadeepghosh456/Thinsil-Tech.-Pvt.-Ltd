import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.clear();
    dispatch(clearCart());
    navigate("/");
  };

  const gotoHome = () => {
    navigate("/products");
  };
  return (
    <div className="header-Container">
      <div className="home" onClick={gotoHome}>
        Home
      </div>
      <div className="header">
        <div id="logout" onClick={handleClick}>
          LogOut
        </div>
        <div>
          <Link to={"/cart"}>
            <p id="cart">Cart</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
