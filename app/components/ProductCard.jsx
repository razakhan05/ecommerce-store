"use client";
import { getDiscountedPrice } from "@/lib/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data }) => {
  return (
    <Link
      href={`/product/${data?.slug}`}
      className="transform overflow-hidden  duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        className="object-cover max-h-96"
        src={data.image}
        alt={data.name}
      />
      <div className="p-4">
        <h2 className="text-lg font-medium">{data.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;{data.price}</p>
          {data.original_price && (
            <>
              <p className="text-base  font-medium line-through">
                &#8377;{data.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPrice(data.original_price, data.price)}%
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
