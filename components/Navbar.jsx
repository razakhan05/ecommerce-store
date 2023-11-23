"use client";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/super-kicks.png";
import { useState } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import MobileMenuIcon from "./MobileMenuIcon";
import MenuMobile from "./MobileMenu";

const Navbar = () => {
  const [show, setShow] = useState("translate-y-0");
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);

  const cartItems = [1, 2, 4, 4, 5, 9, 0];

  return (
    <header
      className={`flex items-center justify-between w-full h-12 md:h-20 z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-16 flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="New Balance Logo" width={80} height={80} />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            // categories={categories}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          <CartIcon cartItems={cartItems} />
          <MobileMenuIcon
            setMobileMenu={setMobileMenu}
            mobileMenu={mobileMenu}
          />
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
