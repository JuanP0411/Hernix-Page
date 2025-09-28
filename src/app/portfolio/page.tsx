"use client";

import ScrollingImageCarousel from "../../components/custom/ScrollingImageCarousel";
export default function Portfolio() {
  return (
    <div className="">
      <div className="mx-[10vw]">
      <h1 className="main-heading">
          <span className="font-bold">Welcome to my collection</span>
          <sup className=" ml-2 underline text-sm font-bold align-top">
  Listen on Spotify
</sup>
        </h1>
        <p className="paragraph-large">
        A curated selection of tracks, projects, and collaborations
          <span className="font-bold">
          that showcase my journey as a sound engineer and producer. 
          </span>{" "}
          Each piece tells a story — hit play and explore the sound behind the craft.
        </p>

 
      </div>
      
    <div>
      <ScrollingImageCarousel 
        imageSize="large"
        scrollDirection="left"
        animationDuration="40s"
        className="mb-20 mt-20"
      />
      </div>
      <div>
      <ScrollingImageCarousel 
        imageSize="large"
        scrollDirection="right"
        animationDuration="40s"
        className="mb-20 "
      />
      </div>
    </div>
    

  );
}
