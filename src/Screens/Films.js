import React from 'react'
import WatchCard from '../components/WatchCard/watchCard'
import { useSelector } from 'react-redux';
import { listData } from '../Redux/Dataslice/dataSlice';
import Navbar from '../components/Navbar/navbar';
export default function Films() {
  const films = useSelector(listData);
  return (
    <>
     <Navbar></Navbar>
      <div className="flex flex-wrap justify-center items-center h-screen">
      {films
  .filter((item) => item.programType === "movie")
  .map((item) => (
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
  )
}
