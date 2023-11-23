"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

const Slide = ({ imageUrl, altText }) => {
  return (
    <div>
      <img
        src={imageUrl}
        className="aspect-[16/10] md:aspect-auto object-cover"
        alt={altText}
      />
      <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
        Shop now
      </div>
    </div>
  );
};

const slidesData = [
  { imageUrl: "/slide-1.png", altText: "Slide 1" },
  { imageUrl: "/slide-2.png", altText: "Slide 2" },
  { imageUrl: "/slide-3.png", altText: "Slide 3" },
];

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="arrow-icon" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 arrow-icon" />
          </div>
        )}
      >
        {slidesData.map((slide, index) => (
          <Slide
            key={index}
            imageUrl={slide.imageUrl}
            altText={slide.altText}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
