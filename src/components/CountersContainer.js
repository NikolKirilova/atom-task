import React, { useState } from "react";
import CounterElement from "./CounterElement";
import { counters } from "../utils/imageList";

const CountersContainer = () => {
  const [cards, setCards] = useState(counters);
  return (
    <section className="counters-container">
      <h1>HOSPICEGUIDEN</h1>
      <p className="counters-text">
        Lorem ipsum dolor sit amet, potenti at torquent dui augue nunc mattis an
        vulputate totam curabitur ante imperdiet vestibulum sem pede ut dolor
        sem in sem suspendisse nec duis, nibh sit laoreet eu vitae enim odio id
        mollis fusce est tempor
      </p>
      <div className="elements-wrapper">
        {cards.map((card) => {
          return <CounterElement key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};

export default CountersContainer;
