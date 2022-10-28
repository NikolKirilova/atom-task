import React from "react";

const ImageBox = ({ image, text, status }) => {
  console.log(image);

  return (
    <>
      {status ? (
        <a className="image-box" href="/">
          <img src={image} alt="images" />
          <div className="image-box-text">{text}</div>
        </a>
      ) : (
        <div className="image-box">
          <img src={image} alt="images" />
          <div className="image-box-text">{text}</div>
        </div>
      )}
    </>
  );
};

export default ImageBox;
