import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "@/store/cartSlice";

const CartItems = ({ data }) => {
  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    console.log(e, "karan");
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e) : e,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image src="/p1.png" alt={"Random As name"} width={120} height={120} />
      </div>
      {/* IMAGE END */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {data.name}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377;{data.price}
          </div>
        </div>
        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {data.subtitle}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <Select onValueChange={(e) => updateCartItem(e, "selectedSize")}>
                <SelectTrigger>
                  <SelectValue placeholder={data.selectedSize} />
                </SelectTrigger>
                <SelectContent>
                  {data.size.data.map(
                    (item, i) =>
                      item.enabled && (
                        <SelectItem key={i} value={item.size}>
                          {item.size}
                        </SelectItem>
                      )
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <Select onValueChange={(e) => updateCartItem(e, "quantity")}>
                <SelectTrigger>
                  <SelectValue placeholder={data.qauntity} />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((q, i) => (
                    <SelectItem key={i} value={q}>
                      {q}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="cursor-pointer text-black/[0.5] hover:text-primary text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
