import React, { useState } from "react";
import cx from "classnames";

const Card = () => {
  const [isMouseOnRight, setIsMouseOnRight] = useState(false);
  const [isMouseOnLeft, setIsMouseOnLeft] = useState(false);

  const handleMouseMove = (event) => { // Catching the mouse position Function
    const { clientX } = event;
    setIsMouseOnRight(clientX > window.innerWidth / 2);
    setIsMouseOnLeft(clientX <= window.innerWidth / 2);
  };

  return (
    
    <div className="flex h-screen" onMouseMove={handleMouseMove}> 
    {/* // Catching the mouse position */}
      {/* Left Image */}
      <div
        className={cx("w-1/2 flex items-center justify-center relative")}
      >
        <div className="relative">
          <img
            src="/images/films.jpg"
            className={cx("h-screen object-cover", {

              "grayscale": isMouseOnLeft,
            })}
          />
          {isMouseOnLeft && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-8xl">Watch Films</h1>
                <p className="text-lg mt-2">Do you want to watch films?</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Image */}
      <div
        className={cx("w-1/2 flex items-center justify-center relative", {})}
      >
        <div className="relative">
          <img
            src="/images/series.jpg"
           
            className={cx("h-screen object-cover", {
            
              "grayscale": isMouseOnRight,
            })}
          />
          {isMouseOnRight && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-8xl">Watch Series</h1>
                <p className="text-lg mt-2">Do you want to watch series?</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Card;
