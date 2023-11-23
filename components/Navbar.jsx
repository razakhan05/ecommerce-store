"use client";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/super-kicks.png";
import { useState } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";

const Navbar = () => {
  const [show, setShow] = useState("translate-y-0");
  const [showCatMenu, setShowCatMenu] = useState(false);
  return (
    <header
      className={`flex items-center justify-between w-full h-12 md:h-20 z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-16 flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="New Balance Logo" width={80} height={80} />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
      </Wrapper>
    </header>
  );
};

export default Navbar;
