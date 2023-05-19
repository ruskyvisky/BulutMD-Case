import React, { useCallback } from "react";
import NavbarItem from "../NavbarItem/navbarItem";
import MobileMenu from "../MobileMenu/mobileMenu";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";
import DropdownButton from "../SortDropdownButton/dropdownButton";

export default function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [MobileMenuvisible, setMobileMenuVisible] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuVisible((current) => !current);
  }, []);

  const isFilmsOrSeriesRoute = location.pathname.includes("/films") || location.pathname.includes("/series");

  const handleSearch = (searchTerm) => {
    onSearch(searchTerm);
  };

  return (
    <nav className="w-full relative z-40 bg-black">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <img src="images/logo.png" alt="logo" className="h-4 lg:h-7" onClick={()=>{
          navigate("/");
        }} />

        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" onClick={() => {
            navigate("/");
          }} />
          <NavbarItem label="Series" onClick={() => {
            navigate("/series");
          }} />
          <NavbarItem label="Films" onClick={() => {
            navigate("/films");
          }} />
        </div>

        <div onClick={toggleMobileMenu} className="lg:hidden flex gap-2 flex-row items-center cursor-pointer ml-8 relative">
          <p className="text-white text-sm"> Browse </p>
          <BsChevronDown className={`text-white transition ${MobileMenuvisible ? "rotate-180" : "rotate-0"}`} />
          <MobileMenu visible={MobileMenuvisible} />
        </div>
      </div>

      <div className="flex flex-row ml-auto gap-7 items-center">
        <div className=" text-gray-200 transition hover:text-gray-300 cursor-pointer ">
          {isFilmsOrSeriesRoute && (
            <div className="px-4 md:px-16 py-2 bg-black flex flex-row ">
              <SearchBar onSearch={handleSearch} />
              <DropdownButton />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
