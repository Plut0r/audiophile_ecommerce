"use client";

import React from "react";
import Header from "./header";
import { PRODUCT } from "./product";

function Hero({ handleClick }: PRODUCT) {
  return (
    <div className="hero">
      <Header border />
      <div className="container flex flex-col items-center lg:items-start gap-7 lg:gap-5 mt-28">
        <p className="text-[0.875rem] font-normal text-white opacity-[0.4964]">
          NEW PRODUCT
        </p>
        <h1 className="text-[2.25rem] min-[768px]:text-[3.5rem] text-white uppercase font-bold leading-[2.5rem] min-[768px]:leading-[3.625rem]">
          XX99 Mark II <br /> Headphones
        </h1>
        <p className="text-white opacity-75 text-[0.9375rem] font-medium w-[20.5rem] min-[768px]:w-[21.8125rem] text-center lg:text-start leading-[1.5625rem]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button
          className="w-[10rem] h-[3rem] bg-[#D87D4A] font-bold text-[0.8125rem] text-white"
          onClick={() => handleClick("xx99-mark-two-headphones")}
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

export default Hero;
