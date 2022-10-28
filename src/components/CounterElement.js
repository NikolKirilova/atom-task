import React from "react";

const CounterElement = ({ image, text }) => {
  return (
    <div className="element-box">
      <div className="icon-box">
        <img src={image} alt="icons" />
      </div>
      <div className="element-text">{text}</div>
    </div>
  );
};

export default CounterElement;
