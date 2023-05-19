import React from "react";
import { useState } from "react";
import WatchCard from "../components/WatchCard/watchCard";
import { useSelector } from "react-redux";
import { listData } from "../Redux/DataSlice/dataSlice";
import { selectSortBy , sortOptionsEnum} from "../Redux/SortSlice/sortSlice";
import Navbar from "../components/Navbar/navbar";
import {
  sortByOldest,
  sortByNewest,
  sortByRandom,
} from "../Functions/sortFunctions";
const Films = () => {
  const films = useSelector(listData);
  const sortBy = useSelector(selectSortBy);
  const [filteredFilms, setFilteredFilms] = useState([]);

  const handleSearch = (searchTerm) => {
    if (searchTerm.length >= 3) {
      const filteredFilms = films.filter((item) => {
        const title = item.title.toLowerCase();
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return title.includes(lowerCaseSearchTerm);
      });

      setFilteredFilms(filteredFilms);
    } else {
      setFilteredFilms([]);
    }
  };
  const sortFilms = (seriesData) => {
    switch (sortBy) {
      case "oldest":
        return sortByOldest(seriesData); // sortByOldest is a function from src\Functions\sortFunctions.js
      case "newest":
        return sortByNewest(seriesData); // sortByNewest is a function from src\Functions\sortFunctions.js
      case "random":
        return sortByRandom(seriesData); //  sortByRandom is a function from src\Functions\sortFunctions.js
      default:
        return seriesData;
    }
  };
  const displayedFilms =
  filteredFilms.length > 0
    ? filteredFilms
    : sortBy === sortOptionsEnum.NORMAL // 
    ? films.filter((film) => film.programType === "movie").slice(0, 18) // show the first 18 movies
    : films.filter((film) => film.programType === "movie"); // show all movies

const sortedFilms = sortFilms(displayedFilms);
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center items-center h-screen">
        {sortedFilms
          .filter((item) => item.programType === "movie")
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
