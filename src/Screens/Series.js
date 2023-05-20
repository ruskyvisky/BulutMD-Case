import React, { useState } from "react";
import WatchCard from "../components/WatchCard/watchCard";
import { useSelector } from "react-redux";
import { listData } from "../Redux/DataSlice/dataSlice";
import { selectSortBy ,sortOptionsEnum } from "../Redux/SortSlice/sortSlice";
import Navbar from "../components/Navbar/navbar";
import {
  sortByOldest,
  sortByNewest,
  sortByRandom,
} from "../Functions/sortFunctions";

const Series = () => {
  const series = useSelector(listData);
  const sortBy = useSelector(selectSortBy);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const handleSearch = (searchTerm) => {
    if (searchTerm.length >= 3) {
      const filteredSeries = series.filter((item) => {
        const title = item.title.toLowerCase(); // title changing to lowercase to make the search case insensitive
        const lowerCaseSearchTerm = searchTerm.toLowerCase(); 

        return title.includes(lowerCaseSearchTerm);
      });

      setFilteredSeries(filteredSeries);
    } else {
      setFilteredSeries([]);
    }
  };

  const sortSeries = (seriesData) => {
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

   // 
   const displayedSeries =
   filteredSeries.length > 0
     ? filteredSeries
     : sortBy === sortOptionsEnum.NORMAL 
     ? series.filter((series) => series.programType === "series").slice(0, 18) // Show the first 18 series
     : series.filter((series) => series.programType === "series");

  const sortedSeries = sortSeries(displayedSeries); // sortedSeries is an array of series sorted by the selected sort option
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center items-center h-screen">
        {sortedSeries 
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

export default Series;
