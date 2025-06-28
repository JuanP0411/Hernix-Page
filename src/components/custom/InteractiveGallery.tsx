"use client";

import React from "react";

/** One image entry (add `href` if you want it to open a link) */
export type GalleryImage = {
  src: string;
  alt?: string;
  href?: string;
};

export interface ScrollingGalleryProps {
  images: GalleryImage[];

  /** "left" = scroll Right→Left (default)  
   *  "right" = scroll Left→Right */
  direction?: "left" | "right";

  /** Seconds for a full loop. Default 40 s */
  speed?: number;

  /** Called when an image without `href` is clicked. */
  onImageClick?: (image: GalleryImage, index: number) => void;
}

const InteractiveScrollingGallery: React.FC<ScrollingGalleryProps> = ({
  images,
  direction = "left",
  speed = 40,
  onImageClick,
}) => {
  const animClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="relative overflow-hidden">
      {/* duplicate the array once for a seamless loop */}
      <div
        className={`flex space-x-6 whitespace-nowrap ${animClass} px-[10vw]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...images, ...images].map((img, i) => {
          const content = (
            <div className="w-[50vh] h-[50vh] overflow-hidden rounded-lg shadow-md">
              <img
                src={img.src}
                alt={img.alt ?? `carousel image ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          );

          return img.href ? (
            <a
              key={i}
              href={img.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <button
              key={i}
              type="button"
              className="focus:outline-none"
              onClick={() => onImageClick?.(img, i % images.length)}
            >
              {content}
            </button>
          );
        })}
      </div>

      {/* scrolling keyframes (scoped globally so Tailwind purge won't strip) */}
      <style jsx global>{`
        @keyframes scroll-left {
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
        .animate-scroll-left {
          animation-name: scroll-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-scroll-right {
          animation-name: scroll-right;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default InteractiveScrollingGallery;
