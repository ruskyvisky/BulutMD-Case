import React, { useCallback } from "react";
import NavbarItem from "./navbarItem";
import { useState , useEffect } from "react";
import { BsChevronDown, BsSearch , BsBell} from "react-icons/bs";
export default function Navbar() {
  const TOP_OFFSET = 66;
  const [MobileMenuvisible, setMobileMenuVisible] = useState(false);
  const [AccountMenuvisible, setAccountMenuVisible] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuVisible((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setAccountMenuVisible((current) => !current);
  }, []);
  return (
    <nav className="w-full fixed  z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}
      >
        <img src="/images/logo.png" alt="logo" className="h-4 lg:h-7 " />
        <div
          className="
            flex-row
            ml-8
            gap-7
            hidden
            lg:flex
            "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Populer" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse My Languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex gap-2 flex-row items-center cursor-pointer ml-8 relative"
        >
          <p className="text-white text-sm"> Browse </p>
          <BsChevronDown className={`text-white transition ${MobileMenuvisible? "rotate-180" : "rotate-0"}` }/>
          <MobileMenu visible={MobileMenuvisible} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className=" text-gray-200 transition hover:text-gray-300 cursor-pointer ">
            <BsSearch></BsSearch>
          </div>
          <div className=" text-gray-200 transition hover:text-gray-300 cursor-pointer ">
            <BsBell></BsBell>
          </div>
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden ">
              <img  src="/images/user-blue.png" alt="profile" />
           
            </div>
            <BsChevronDown className={`w-4 text-white fill-white transition ${AccountMenuvisible ? 'rotate-180' : 'rotate-0'}`}/>
            <Accountmenu visible={AccountMenuvisible}/>
          </div>
        </div>
      </div>
    </nav>
  );
}
