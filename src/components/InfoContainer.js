import React, { useState } from "react";

const InfoContainer = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="info-container">
      <div className="info-text">
        Consecteur adipisicin in elusmos tempor incididunt the labore dolore is
        magnaliua veniam nostrud exercitation in ullamco laboris aliquip an
        consequa the prehene occaecas cupidatat laborum erspiciatis unomnis
        voluptatem there accusantium laudantium aperiam.
      </div>
      {!showInfo && (
        <button onClick={() => setShowInfo(!showInfo)}>read more</button>
      )}

      {showInfo && (
        <p>
          Consecteur adipisicin in elusmos tempor incididunt the labore dolore
          is magnaliua veniam nostrud exercitation in ullamco laboris aliquip an
          consequa the prehene occaecas cupidatat laborum erspiciatis unomnis
          voluptatem there accusantium laudantium aperiam.
          <button onClick={() => setShowInfo(!showInfo)}>read less</button>
        </p>
      )}
    </section>
  );
};

export default InfoContainer;
