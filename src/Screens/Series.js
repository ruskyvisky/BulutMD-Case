import React, { useState } from "react";
import WatchCard from "../components/WatchCard/watchCard";
import { useSelector } from "react-redux";
import { listData } from "../Redux/DataSlice/dataSlice";
import { selectSortBy } from "../Redux/SortSlice/sortSlice";
import Navbar from "../components/Navbar/navbar";

const Series = () => {
  const series = useSelector(listData);
  const sortBy = useSelector(selectSortBy);
  const [filteredSeries, setFilteredSeries] = useState([]);

  const handleSearch = (searchTerm) => {
    if (searchTerm.length >= 3) {
      const filteredSeries = series.filter((item) => {
        const title = item.title.toLowerCase();
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
      case 'oldest':
        return seriesData.sort((a, b) => a.releaseYear - b.releaseYear);
      case 'newest':
        return seriesData.sort((a, b) => b.releaseYear - a.releaseYear);
      case 'random':
        return seriesData.sort(() => Math.random() - 0.5);
      default:
        return seriesData;
    }
  };
  const displayedSeries = filteredSeries.length > 0 ? filteredSeries : series.filter(series => series.programType === "series");

  const sortedSeries = sortSeries(displayedSeries);
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center items-center h-screen">
        {sortedSeries
          .filter((item) => item.programType === "series")
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
