import React from 'react';
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className="flex items-center justify-end rounded-md ">
      <input
        className="bg-black text-white placeholder-gray-400 outline-none m-2 "
        type="text"
        placeholder="Search"
      />
      <button
        className="ml-2 m-3 bg-gray-700 text-white rounded-md p-2"
        type="submit"
      >
        <BsSearch size={14}  />
      </button>
    </div>
  );
};

export default SearchBar;