import React from 'react'
import WatchCard from '../components/WatchCard/watchCard'
import { useSelector } from 'react-redux';
import { listData } from '../Redux/Dataslice/dataSlice';
import Navbar from '../components/Navbar/navbar';
import DropdownButton from '../components/SortDropdownButton/dropdownButton';

export default function Series() {
  const series = useSelector(listData);
  
  return (
    <>
    
    <Navbar></Navbar>
      <div className="flex flex-wrap justify-center items-center h-screen">
       
      {series
  .filter((item) => item.programType === "series")
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
  );
}
