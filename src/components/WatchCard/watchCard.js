import React from 'react';

const WatchCard = ({ poster, description, title, releaseDate }) => {
  return (
    <div className="w-1/2 max-w-xs rounded overflow-hidden shadow-lg p-6">
      <img src={poster} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-2 mr-4">{title}</div>
        <p className="text-white text-base ">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          {releaseDate}
        </span>
      </div>
    </div>
  );
};

export default WatchCard;