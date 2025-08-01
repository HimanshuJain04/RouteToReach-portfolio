"use client";

import React from "react";
import { testimonials } from "./testimonials";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

export function Testimonials() {
  return (
    <div
      id="testimonials"
      className="w-full flex flex-col items-center-center gap-14"
    >
      {/* title */}
      <div className="w-full flex justify-center">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-bold max-w-2xl">
          See what our customer say about us
        </h1>
      </div>

      {/* swiper carousel */}
      <InfiniteMovingCards items={testimonials} />
    </div>
  );
}
