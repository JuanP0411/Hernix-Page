import React from "react";

export default function SpotifyPlaylist({}) {
  return (
    <div className="mx-[10vw] flex flex-col mt-[20vh] px-4 text-white mb-[10vh]">
      <h2 className="w-full text-left text-2xl md:text-4xl lg:text-6xl font-extralight mb-5">
        This is what <span className="font-bold">i sound like </span>
      </h2>

      <p className={""}>
      Explore a curated selection of my <span className="font-bold">latest productions, mixes, and collaborations</span> — all in one place.
      </p>

      <div className="w-full mt-[5vh]">
        <iframe
          className="w-full h-[50vh] rounded-xl shadow-2xl"
        src="https://open.spotify.com/embed/playlist/4nSc9fFlo0wtHzIuRiaDjo?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist"
        ></iframe>
      </div>
    </div>
  );
}
