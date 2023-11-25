import Link from "next/link";
import React from "react";

const MobileMenu = ({ setMobileMenu }) => {
  return (
    <ul className="flex flex-col bg-white md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] border-t">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <li className="py-4 px-5 border-b">
            <Link href={item?.url} onClick={() => setMobileMenu(false)}>
              {item.name}
            </Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 4, name: "Contact", url: "/contact" },
];

export default MobileMenu;
