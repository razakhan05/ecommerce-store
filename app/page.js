"use client";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCT_DETAILS } from "@/lib/data";

export default function Home() {
  const products = PRODUCT_DETAILS;

  return (
    <div>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph*/}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Kickin&apos; It with Supreme Comfort
          </div>
          <div className="text-md md:text-xl">
            Yo, check it out Nike&apos;s got this rad ZoomX midsole that&apos;s
            light as a feather, amped up with extra cushioning for those long
            runs.
          </div>
        </div>

        {/* products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
