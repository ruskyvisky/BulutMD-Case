import React, { useState } from "react";
import WatchCard from "../components/WatchCard/watchCard";
import { useSelector } from "react-redux";
import { listData } from "../Redux/Dataslice/dataSlice";
import Navbar from "../components/Navbar/navbar";
import DropdownButton from "../components/SortDropdownButton/dropdownButton";

const Series = () => {
  const series = useSelector(listData);
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

  const displayedSeries =
    filteredSeries.length > 0 ? filteredSeries : series.slice(0, 18);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center items-center h-screen">
        {displayedSeries
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
