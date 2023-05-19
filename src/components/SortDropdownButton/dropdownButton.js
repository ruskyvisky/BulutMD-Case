import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, selectSortBy } from '../../Redux/SortSlice/sortSlice';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);

  const options = [
    { id: 1, label: 'Sort by new', value: 'newest' },
    { id: 2, label: 'Sort by old', value: 'oldest' },
    { id: 3, label: 'Sort randomly', value: 'random' },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    dispatch(setSortBy(option.value));
  };

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-white bg-red-700 rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption !== '' ? selectedOption : 'Sort'}
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.id}
                className={`group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                  sortBy === option.value ? 'font-semibold' : ''
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;