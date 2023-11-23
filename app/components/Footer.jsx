"use client";
import Wrapper from "./Wrapper";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Component for individual menu items
  const MenuItem = ({ title, items }) => (
    <div className="flex flex-col gap-3">
      {/* Title for the menu category */}
      <div className="font-oswald font-medium uppercase text-sm">{title}</div>

      {/* Displaying each item within the menu category */}
      {items.map((item, index) => (
        <div
          key={index}
          className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );

  // Array containing social icons with their respective links
  const renderSocialIcons = [
    { icon: <FaFacebookF size={20} />, link: "https://facebook.com" },
    { icon: <FaTwitter size={20} />, link: "https://twitter.com" },
    { icon: <FaYoutube size={20} />, link: "https://youtube.com" },
    { icon: <FaInstagram size={20} />, link: "https://instagram.com" },
  ];

  return (
    <footer className="bg-red-700 text-white pt-14 pb-3">
      {/* Wrapper for organizing footer content */}
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* Left Section of Footer */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* Menu Items */}
          <div className="flex flex-col gap-3 shrink-0">
            {/* Displaying the main menu items */}
            {[
              "Find a store",
              "Become a partner",
              "Sign up for email",
              "Send us feedback",
              "Student discount",
            ].map((item, index) => (
              <div
                key={index}
                className="font-oswald font-medium uppercase text-sm cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Normal Menu Items */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* Rendering various categories within the footer */}
            <MenuItem
              title="Get Help"
              items={[
                "Order Status",
                "Delivery",
                "Returns",
                "Payment Options",
                "Contact Us",
              ]}
            />
            <MenuItem
              title="About Super Kicks"
              items={["News", "Careers", "Investors", "Sustainability"]}
            />
          </div>
        </div>

        {/* Right Section of Footer */}
        <div className="flex gap-4 justify-center md:justify-start">
          {/* Rendering social icons with their respective links */}
          {renderSocialIcons.map((social, index) => (
            <div
              key={index}
              onClick={() => window.open(social.link, "_blank")}
              className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center hover:bg-white/[0.5] cursor-pointer"
            >
              {social.icon}
            </div>
          ))}
        </div>
      </Wrapper>

      {/* Bottom section of the Footer */}
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* Left part displaying copyright */}
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Super Kicks, Inc. All Rights Reserved
        </div>

        {/* Right part with additional links */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          {/* Rendering additional links */}
          {["Guides", "Terms of Sale", "Terms of Use", "Privacy Policy"].map(
            (item, index) => (
              <div
                key={index}
                className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer"
              >
                {item}
              </div>
            )
          )}
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
