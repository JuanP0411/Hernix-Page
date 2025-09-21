"use client";

import React from "react";
import { getCarouselImages } from "../../lib/imageUtils";

const images = getCarouselImages();

export default function WorkGallery() {
  return (
    <div className="mt-[5vh]">
      {/* Title section with horizontal margin */}
      <div className="mx-[10vw] flex flex-col">
        <h2 className="main-heading font-extralight leading-tight">
          Working{" "}
          <span className="font-bold">
            with the best
            <span className="underline relative -top-10 ml-[2vw] font-extralight text-lg md:text-lg lg:text-xl">
              view all
            </span>

          </span>
        </h2>
      </div>

      {/* Scrolling container without horizontal margin */}
      <div className="relative overflow-hidden">
        <div
          className="flex space-x-6 whitespace-nowrap animate-scroll px-[10vw]"
          style={{ animationDuration: "40s" }}
        >
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={`/carosuel/${src}`}
              alt={`Carousel image ${i + 1}`}
              className="inline-block w-48 h-48 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Global keyframes animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
