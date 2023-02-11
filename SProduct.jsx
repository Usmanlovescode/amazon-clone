import React from "react";
import "./styles/SProduct.css";
import { Link } from "react-router-dom";
let container = {
  width: " 317px",
  height: "390px",
  backgroundColor: "white",
};

const SProduct = (props) => {
  return (
    <>
      <div className="container" style={container}>
        <p className="heading">{props.heading}</p>
        <Link to={props.imglink}>
          <img src={props.img} alt="" className="picture" />
        </Link>
        <br />
        <div className="see">
          <p>
            <Link to={props.imglink} className="seemore" id="see">
              See more
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SProduct;
