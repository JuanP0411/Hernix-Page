import ImageTextSplit from "@/components/custom/ImageTextSplit";

export default function Home() {
  return (
    <div className="mx-[10vw] my-[4vh] h-full flex flex-col">
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-left text-white mt-12 mb-8">
          <span className=" font-light">What i bring</span>{" "}
          <span className="font-bold">to the mix</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-white mb-10 font-light">
          Every project is different and so is the sound it needs.
          <span className="font-bold">
            Whether you're building a track from scratch or polishing your final
            version
          </span>{" "}
          I offer custom solutions to make your music hit just right.
        </p>
      </div>
      <div>
        <div className="my-8">
          <ImageTextSplit
            imageUrl="/assets/team.jpg"
            heading="Music Production"
            paragraph="We’re a diverse team of professionals working to deliver the best results for our clients."
            buttonText="Learn More"
            imagePosition="left"
          />
        </div>

        <div className="my-32">
          <ImageTextSplit
            imageUrl="/assets/team.jpg"
            heading="Recording"
            paragraph="We’re a diverse team of professionals working to deliver the best results for our clients."
            buttonText="Learn More"
            imagePosition="right"
          />
        </div>

        <div className="my-32">
          <ImageTextSplit
            imageUrl="/assets/team.jpg"
            heading="Mixing"
            paragraph="We’re a diverse team of professionals working to deliver the best results for our clients."
            buttonText="Learn More"
            imagePosition="left"
          />
        </div>
      </div>
    </div>
  );
}
