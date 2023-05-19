import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm.length >= 3) {
      onSearch(searchTerm);
    }
    
    if (searchTerm.length == 0 ) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex items-center justify-end rounded-md">
      <input
        className="bg-black text-white placeholder-gray-400 outline-none m-2"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    
    </div>
  );
};

export default SearchBar;