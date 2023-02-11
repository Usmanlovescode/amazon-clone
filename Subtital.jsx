import React from "react";
import "./styles/Subtital.css";
const Subtital = (props) => {
  return (
    <>
      <div className="price">
        <h2 className="total">Total</h2>
        <div className="total__price">$200{props.price}</div>
      </div>
      <h2 className="total__items">Items</h2>
      <h3 className="t__items">4{props.items}</h3>
      <button className="proceed">Proceed to Checkout</button>
    </>
  );
};

export default Subtital;
