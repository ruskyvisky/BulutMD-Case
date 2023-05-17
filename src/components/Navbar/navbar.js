import React, { useCallback } from "react";
import NavbarItem from "../NavbarItem/navbarItem";
import MobileMenu from "../MobileMenu/mobileMenu";
import { useState , useEffect } from "react";
import { BsChevronDown, BsSearch , BsBell} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const [MobileMenuvisible, setMobileMenuVisible] = useState(false); 
  const [showBackground, setShowBackground] = useState(false); 


  
  // Show or hide the mobile menu
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuVisible((current) => !current);
  }, []);

 
  return (
    
    <nav className="w-full  fixed z-40 bg-black">
           {/* NAV START  */}
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}
      >
           {/* LOGO IMAGE   */}
        <img src="images/logo.png" alt="logo" className="h-4 lg:h-7 " /> 
     
        <div
          className="
            flex-row
            ml-8
            gap-7
            hidden
            lg:flex
            "
        > 
        {/* NAVBAR ITEM LIST  */}
          <NavbarItem label="Home" onClick={()=>{
            console.log("home clicked")
            navigate("/")
          }} /> 
          <NavbarItem label="Series" onClick={()=>{
            navigate("/series")
          }} />
          <NavbarItem label="Films" onClick={()=>{
            navigate("/films")
          }} />
        </div>

        {/* MOBILE MENU ICON  */}
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex gap-2 flex-row items-center cursor-pointer ml-8 relative"
        >
          <p className="text-white text-sm"> Browse </p>
          <BsChevronDown className={`text-white transition ${MobileMenuvisible? "rotate-180" : "rotate-0"}` }/>
          <MobileMenu visible={MobileMenuvisible} />
        </div>
       {/* MOBILE MENU ENDS  */}
      </div>
         {/* NAV END  */}
    </nav>
  );
}
