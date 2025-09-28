"use client";

import { getCarouselImages } from "../../lib/imageUtils";

interface ScrollingImageCarouselProps {
  imageSize?: "small" | "medium" | "large" | "custom";
  customSize?: {
    width: string;
    height: string;
  };
  scrollDirection?: "left" | "right";
  animationDuration?: string;
  className?: string;
  images?: string[];
  imageClassName?: string;
}

const sizeClasses = {
  small: "w-32 h-32",
  medium: "w-48 h-48", 
  large: "w-64 h-64",
};

export default function ScrollingImageCarousel({
  imageSize = "medium",
  customSize,
  scrollDirection = "left",
  animationDuration = "40s",
  className = "",
  images,
  imageClassName = "",
}: ScrollingImageCarouselProps) {
  const carouselImages = images || getCarouselImages();
  
  const getImageSizeClass = () => {
    if (customSize || imageSize === "custom") {
      return "";
    }
    return sizeClasses[imageSize as keyof typeof sizeClasses];
  };

  const getImageStyle = () => {
    if (customSize) {
      return {
        width: customSize.width,
        height: customSize.height,
      };
    }
    return {};
  };

  const getAnimationClass = () => {
    return scrollDirection === "right" ? "animate-scroll-right" : "animate-scroll";
  };

  return (
    <>
      <div className={`relative overflow-hidden ${className}`}>
        <div
          className={`flex space-x-6 whitespace-nowrap ${getAnimationClass()} px-[10vw]`}
          style={{ animationDuration }}
        >
          {[...carouselImages, ...carouselImages].map((src, i) => (
            <img
              key={i}
              src={`/carosuel/${src}`}
              alt={`Carousel image ${i + 1}`}
              className={`inline-block ${getImageSizeClass()} object-cover rounded-lg shadow-md ${imageClassName}`}
              style={getImageStyle()}
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
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        
        .animate-scroll-right {
          animation-name: scroll-right;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
}
