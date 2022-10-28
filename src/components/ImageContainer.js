import React, { useState } from "react";
import ImageBox from "./ImageBox";
import { images } from "../utils/imageList";

const ImageContainer = () => {
  const [cards, setCards] = useState(images);

  return (
    <div className="image-container">
      {cards.map((card) => {
        return <ImageBox key={card.id} {...card} />;
      })}
    </div>
  );
};

export default ImageContainer;
