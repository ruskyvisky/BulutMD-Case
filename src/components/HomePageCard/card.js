import React, { useState } from 'react';
import cx from 'classnames';


const Card = () => {
  const [isMouseOnRight, setIsMouseOnRight] = useState(false);
  const [isMouseOnLeft, setIsMouseOnLeft] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX } = event;
    setIsMouseOnRight(clientX > window.innerWidth / 2);
    setIsMouseOnLeft(clientX <= window.innerWidth / 2);
  };

  return (
    <div className="flex h-screen" onMouseMove={handleMouseMove}>
      <div
        className={cx('w-1/2 flex items-center justify-center relative', {
          'bg-gray-800': isMouseOnLeft,
        })}
      >
        <div className="relative">
          <img
            src="/images/films.jpg"
            alt="Left Image"
            className={cx('h-screen object-cover', {
              'scale-110': isMouseOnLeft,
              'grayscale': isMouseOnLeft,
            })}
          />
          {isMouseOnLeft && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-3xl">Watch Films</h1>
                <p className="text-sm mt-2">Do you want to watch films?</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={cx('w-1/2 flex items-center justify-center relative', {
          'bg-gray-800': isMouseOnRight,
        })}
      >
        <div className="relative">
          <img
            src="/images/series.jpg"
            alt="Right Image"
            className={cx('h-screen object-cover', {
              'scale-110': isMouseOnRight,
              'filter-grayscale': isMouseOnRight,
            })}
          />
          {isMouseOnRight && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-3xl">Watch Films</h1>
                <p className="text-sm mt-2">Do you want to watch films?</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;