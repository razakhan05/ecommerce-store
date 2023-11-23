import Link from "next/link";
import React from "react";

import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {!!item?.subMenu ? (
            <li
              className=" cursor-pointer flex items-center gap-2 relative"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              {item.name}
              {showCatMenu ? (
                <BsChevronCompactUp size={14} />
              ) : (
                <BsChevronCompactDown size={14} />
              )}

              {showCatMenu && (
                <ul className="absolute bg-white top-6 rounded-md left-0 min-w-[250px] p-1 shadow-lg">
                  {subMenuData?.map((subMenu) => {
                    return (
                      <Link
                        key={subMenu.id}
                        href={"/"}
                        onClick={() => setShowCatMenu(false)}
                      >
                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                          {subMenu.name}
                          <span className="opacity-50 text-sm">78</span>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];
export default Menu;
