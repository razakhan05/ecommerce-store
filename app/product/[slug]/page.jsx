"use client";
import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/app/components/Wrapper";
import ProductDetailsCrousel from "@/app/components/ProductDetailsCrousel";
import RelatedProducts from "@/app/components/RelatedProducts";
import { PRODUCT_DETAILS } from "@/lib/data";
import { getDiscountedPrice } from "@/lib/helper";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

const ProductDetails = ({ params: { slug } }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError(true);
    } else {
      dispatch(
        addToCart({
          ...product,
          selectedSize,
        })
      );
    }
  };

  const product = PRODUCT_DETAILS.find((p) => p.slug === slug);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left section - Product Images */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCrousel images={product.images} />
          </div>

          {/* Right section - Product Details */}
          <div className="flex-[1] py-3">
            <div className="text-4xl font-semibold mb-2 leading-tight">
              {product.name}
            </div>
            <div className="text-lg font-semibold mb-5">{product.subtitle}</div>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                &#8377;{product.price}
              </p>
              {product.original_price && (
                <>
                  <p className="text-base font-medium line-through">
                    &#8377;{product.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPrice(product.original_price, product.price)}
                  </p>
                </>
              )}
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20"></div>
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>

              {/* Size Options */}
              <div className="grid grid-cols-3 gap-2">
                {product.size.data.map(({ size, enabled }, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      enabled
                        ? "hover:border-primary cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === size ? "border-primary" : ""}`}
                    onClick={() => {
                      setSelectedSize(size);
                      setError(false);
                    }}
                  >
                    {size}
                  </div>
                ))}
              </div>
              {error && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full py-4 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            >
              Add to Cart
            </button>
            <button className="w-full py-4 rounded-full border border-primary text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              {product.description}
            </div>
          </div>
        </div>
        <RelatedProducts product={PRODUCT_DETAILS} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
