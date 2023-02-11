import React from "react";
import "./styles/Slider.css";

const Slider = (props) => {
  return (
    <>
      <div className="slider__container">
        <p className="slider__heading">{props.heading}</p>
        <div className="slider__items">
          <div className="slider__item specific">
            <img src={props.src1} alt="" />
          </div>
          <div className="slider__item item">
            <img src={props.src2} alt="" />
          </div>
          <div className="slider__item item">
            <img src={props.src3} alt="" />
          </div>
          <div className="slider__item item">
            <img src={props.src4} alt="" />
          </div>
          <div className="slider__item item">
            <img src={props.src5} alt="" />
          </div>
          <div className="slider__item item">
            <img src={props.src6} alt="" />
          </div>
          <div className="slider__item item">
            <img src={props.src7} alt="" />
          </div>
          <div className="slider__item item">
            <img src={props.src8} alt="" />
          </div>
          <div className="slider__item item">
            <img src={props.src9} alt="" />
          </div>
          <div className="slider__item item">
            <img src={props.src10} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
