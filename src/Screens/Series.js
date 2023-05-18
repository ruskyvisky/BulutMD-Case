import React from 'react'
import WatchCard from '../components/WatchCard/watchCard'
import { useSelector } from 'react-redux';
import { listData } from '../Redux/Dataslice/dataSlice';
export default function Series() {
  const series = useSelector(listData);
  
  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-screen">
        {series.map((item) => (
          <WatchCard
            key={item.id}
            poster={item.images["Poster Art"].url}
            description={item.description}
            title={item.title}
            releaseDate={item.releaseYear}
          />
        ))}
      </div>
    </>
  );
}
