import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <li className="cursor-pointer">
            <Link href={item?.url}>{item.name}</Link>
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

export default Menu;
