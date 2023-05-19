import React, { useState } from "react";
import cx from "classnames";
import "../../Styles/styles.css";

const Card = ({ imageSrc, cardTitle, cardSubtitle, isRight }) => {
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX } = event;
    setIsMouseOnCard(
      (isRight && clientX > window.innerWidth / 2) ||
      (!isRight && clientX <= window.innerWidth / 2)
    );
  };

  const handleMouseLeave = () => {
    setIsMouseOnCard(false);
  };

  return (
    <div
      className={cx("flex items-center justify-center relative cursor-pointer", {
        "w-1/2": !isRight,
        "w-1/2 ml-auto": isRight,
      })}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <img
          src={imageSrc}
          className={cx("w-full h-screen object-cover", {
            "opacity": !isMouseOnCard,
            "opacity": isMouseOnCard,
          })}
          alt=""
        />
        {isMouseOnCard && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-8xl">{cardTitle}</h1>
              <p className="text-lg mt-2">{cardSubtitle}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;