import ImageTextSplit from "@/components/custom/ImageTextSplit";

export default function Home() {
  return (
    <div className="">
      <div className="mx-[10vw]">
      <h1 className="main-heading">
          <span className=" font-light">What i bring</span>{" "}
          <span className="font-bold">to the mix</span>
        </h1>
        <p className="paragraph-large">
          Every project is different and so is the sound it needs.
          <span className="font-bold">
            Whether you're building a track from scratch or polishing your final
            version
          </span>{" "}
          I offer custom solutions to make your music hit just right.
        </p>
      </div>
      <div>
        <div className="my-[10vh]">
          <ImageTextSplit
            imageUrl="/services/hernix-board.png"
            heading="Recording"
            paragraph="I offer professional recording services in studios or adapted environments, ensuring technical and artistic quality that preserves the naturalness and emotion of each take."
            buttonText="Previous projects"
            imagePosition="left"
          />
        </div>

        <div className="my-32">
          <ImageTextSplit
            imageUrl="/services/hernix-board2.png"
            heading="Mastering"
            paragraph="Mastering is the final step before releasing a song. I provide a precise process that ensures clarity, balance, and compatibility, delivering a professional product true to the project’s essence."
            buttonText="Previous projects"
            imagePosition="right"
          />
        </div>

        <div className="my-32">
          <ImageTextSplit
            imageUrl="/services/hernix-board3.png"
            heading="Mixing"
            paragraph="I transform recordings into clear, powerful sonic experiences, combining technical skill and musical sensitivity to highlight the artistic intent. Each mix is tailored to the artist’s style and exceeds expectations."
            buttonText="Previous projects"
            imagePosition="left"
          />
        </div>
        <div className="my-32">
          <ImageTextSplit
            imageUrl="/services/hernix-board4.png"
            heading="Production"
            paragraph="I support artists from concept to final version, including composition, arrangements, sound design, and creative direction to deliver authentic, professional productions."
            buttonText="Previous projects"
            imagePosition="right"
          />
        </div>
        <div className="my-32">
          <ImageTextSplit
            imageUrl="/services/hernix-board7.png"
            heading="Dolby Atmos mix"
            paragraph="I create Dolby Atmos mixes for an immersive 360° experience, ideal for spatial audio platforms and artists seeking innovative sound."
            buttonText="Previous projects"
            imagePosition="left"
          />
        </div>
        <div className="my-32">
          <ImageTextSplit
            imageUrl="/services/hernix-board8.png"
            heading="Live Sound"
            paragraph="I design and operate sound for concerts and live events, ensuring a clear, powerful experience that stays true to the artist’s identity."
            buttonText="Previous projects"
            imagePosition="right"
          />
        </div>
      </div>
    </div>
  );
}
