import React from "react";
import "./styles/Checkout.css";
import Navbar from "./Navbar.jsx";
import Subtital from "./Subtital.jsx";
const Checkout = () => {
  return (
    <>
      <Navbar />
      
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="img"
            src="images/products/small.jpg"
            alt=""
            height={130}
            width={820}
          />
          <div className="checkout__title">
            <h2>Your Shopping Basket</h2>
            {/* Basted item */}
            {/* Basted item */}
            {/* Basted item */}
            {/* Basted item */}
            {/* Basted item */}
            {/* Basted item */}
          </div>
        </div>
        <div className="checkout__right">
          <Subtital />
        </div>
      </div>
    </>
  );
};

export default Checkout;
