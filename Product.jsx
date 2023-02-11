import React from "react";
import "./styles/Product.css";
import {Link} from 'react-router-dom';
const Product = (props) => {
  return (
    <>
      <div className="product">
        <p className="product__heading">{props.product__heading}</p>
        <div className="grid__images">
          <div className="grid-image">
            <Link to={props.link}>
              <img
                src={props.src1}
                alt=""
                width={110}
                height={100}
                className=""
              />
            </Link>
            <p className="grid__image__p">{props.head1}</p>
          </div>
          <div className="grid-image">
            <Link to={props.link}>
              <img
                src={props.src2}
                alt=""
                width={110}
                height={100}
                className=""
              />
            </Link>
            <p className="grid__image__p">{props.head2}</p>
          </div>

          <div className="grid-image">
            <Link to={props.link}>
              <img
                src={props.src3}
                alt=""
                width={110}
                height={100}
                className=""
              />
            </Link>
            <p className="grid__image__p">{props.head3}</p>
          </div>

          <div className="grid-image">
            <Link to={props.link}>
              <img
                src={props.src4}
                alt=""
                width={110}
                height={100}
                className=""
              />
            </Link>
            <p className="grid__image__p">{props.head4}</p>
          </div>
        </div>
        <p>
          <Link to={props.link} className="seemore">
            See more
          </Link>
        </p>
      </div>
    </>
  );
};

export default Product;
