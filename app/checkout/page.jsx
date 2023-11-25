"use client";
import React, { useMemo } from "react";
import Wrapper from "../components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CheckOut = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalAmount = useMemo(() => {
    let result = cartItems.reduce(
      (total, val) => total + parseFloat(val.price),
      0
    );
    return result;
  }, [cartItems]);
  return (
    <div className="w-full md:py-10">
      <Wrapper>
        <div className="flex justify-between w-full">
          {/* CONTACT FORM */}
          <div className=" flex w-full h-full gap-4  flex-col px-3 py-2">
            <div>
              <h1 className=" font-semibold">Contact</h1>
              <Input placeholder="Email or phone number" />
            </div>

            <div>
              <h1 className="font-semibold">Shipping address</h1>
              <div className="flex justify-between gap-4">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>
              <div className="flex flex-col py-4 gap-4">
                <Input placeholder="Address" />
                <Input placeholder="Address,suite,etc.(optional)" />
              </div>
              <div className="flex justify-between gap-4">
                <Input placeholder="City" />
                <Input placeholder="State" />
                <Input placeholder="Zip Code" />
              </div>
            </div>

            <div>
              <h1 className="font-semibold">Payment</h1>
              <h1 className=" text-muted-foreground text-sm">
                All transactions are secure and encrypted.
              </h1>

              <div className=" border flex justify-center items-en bg-muted text-xs text-muted-foreground p-6 rounded-lg">
                <h1 className=" text-center flex">
                  After clicking “Pay now”, you will be redirected to Razorpay
                  Secure (UPI, Cards, Wallets, NetBanking) to complete your
                  purchase securely.
                </h1>
              </div>
            </div>

            <Button>Pay Now</Button>
          </div>

          {/* PRODUCT DETIALS */}
          <div className=" flex w-full h-full flex-col">
            {cartItems?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between max-h-40 overflow-y-auto my-1 w-full px-4"
              >
                <div className="flex gap-4">
                  <Image
                    src={item.image}
                    width={60}
                    height={60}
                    alt=""
                    className="border w-10 h-10 object-cover rounded-md"
                  />
                  <div className=" font-semibold">
                    <h1>{item.name}</h1>
                    <h3 className=" text-xs text-muted-foreground">
                      {item.selectedSize}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  &#8377;{item.price}
                </p>
              </div>
            ))}

            <div className="flex flex-col gap-2 px-5 py-2">
              <div className="flex justify-between">
                <h1>Subtotal</h1>
                <p className="font-semibold text-xs">{totalAmount}</p>
              </div>
              <div className="flex justify-between">
                <h1 className="font-semibold">Total</h1>
                <p className="font-semibold">{totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CheckOut;
