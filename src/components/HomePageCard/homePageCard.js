import React, { useState } from "react";
import cx from "classnames";
import "../../Styles/styles.css";
import { useNavigate } from "react-router-dom";
const Card = ({ imageSrc, cardTitle, cardSubtitle, isRight }) => {
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);
  const navigate = useNavigate();
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
        "w-full md:w-1/2": true,
        "ml-auto": isRight,
      })}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative"
        onClick={() => {
          console.log(cardTitle);
          navigate(`/${cardTitle.toLowerCase()}`);}
        }
      >
        <img
          
          src={imageSrc}
          className={cx("w-screen h-screen object-cover ", {
            "opacity-40": isMouseOnCard,
            "opacity-100": !isMouseOnCard,
        
          })}

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