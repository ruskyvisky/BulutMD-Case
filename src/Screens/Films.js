import React from 'react';
import { useState } from 'react';
import WatchCard from '../components/WatchCard/watchCard';
import { useSelector } from 'react-redux';
import { listData } from '../Redux/Dataslice/dataSlice';
import Navbar from '../components/Navbar/navbar';

const Films = () => {
  const films = useSelector(listData);
  const [filteredFilms, setFilteredFilms] = useState([]);

  const handleSearch = (searchTerm) => {
    if (searchTerm.length >= 3) {
      const filteredFilms = films.filter(item => {
        const title = item.title.toLowerCase();
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return  title.includes(lowerCaseSearchTerm);
      });

      setFilteredFilms(filteredFilms);
    } else {
      setFilteredFilms([]);
    }
  };
  const displayedFilms = filteredFilms.length > 0 ? filteredFilms : films.filter(film => film.programType === "movie").slice(0, 18);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center items-center h-screen">
      {displayedFilms
  .filter(item => item.programType === "movie")
  .map((item, index) => (
    <WatchCard
      key={index}
      poster={item.images["Poster Art"].url}
      description={item.description}
      title={item.title}
      releaseDate={item.releaseYear}
    />
  ))}
      </div>
    </>
  );
};

export default Films;