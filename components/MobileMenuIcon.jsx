import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";

const MobileMenuIcon = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
      {mobileMenu ? (
        <VscChromeClose
          className="text-[16px]"
          onClick={() => setMobileMenu(false)}
        />
      ) : (
        <BiMenuAltRight
          className="text-[20px]"
          onClick={() => setMobileMenu(true)}
        />
      )}
    </div>
  );
};

export default MobileMenuIcon;
