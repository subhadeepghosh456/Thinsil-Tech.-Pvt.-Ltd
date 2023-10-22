import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";

import Header from "./Header";

const Cart = () => {
  const [amount, setTotalamount] = useState(0);
  const total_data = useSelector((store) => store.cart.items);

  useEffect(() => {
    const subTotal = total_data.reduce((acc, item) => {
      acc = acc + item.qty * Number(item.price);
      return acc;
    }, 0);
    setTotalamount(subTotal);
  }, [total_data]);
  // if cart is empty show nothing
  if (total_data.length === 0) {
    return (
      <div>
        <Header />
        <h1>Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="cart-container">
        {total_data?.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <p>Total Price${amount.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
