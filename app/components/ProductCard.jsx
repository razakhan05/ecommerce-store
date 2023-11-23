// import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import product from "../../public/product-1.webp";
const ProductCard = () => {
  return (
    <Link
      href={"/"}
      className="transform overflow-hidden  duration-200 hover:scale-105 cursor-pointer"
    >
      <Image width={500} height={500} src={product} alt={"name"} />
      <div className="p-4">
        <h2 className="text-lg font-medium">Nike Air </h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;400</p>

          {/* {p.original_price && ( */}
          <>
            <p className="text-base  font-medium line-through">&#8377;4000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </>
          {/* )} */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
