

export default function AboutMe() {
  return (
    <div className="">
      <img src="/about.svg" alt="MyApp Logo" className='w-full block'/>
      <div className="mx-[10vw]">
      <h1 className="main-heading">
          <span className="font-bold">About Me</span>
          <sup className=" ml-2 underline text-sm align-top">
        My resume
        </sup>
        </h1>
        <p className="paragraph-large">
        Hi! My name is Juan Felipe Hernandez,<span className="font-bold"> but everyone calls me Hernix, Im a Sound Engineer and Producer from Colombia who loves to work with artists to help them create their new hits! I started in music as a drummer but my passion for technology made me interested in Post Production for Music.</span> I also love to making the sound for live concerts and events. I believe that being a music engineer is also an art so I like to give each song and artists its own unique sound so that their music have a postive effect in the people that listen to it.
          <span className="font-bold">

          </span>{" "}
        </p>
        <p className="paragraph-large">
        I am a certified by Berklee College of Music Boston in
          <span className="font-bold">
          Pro Tools Professional, and a Certified Dante and RedNet User Level 2 by Focusrite in Full Sail University.
          </span>{" "}
        </p>

 
      </div>
      <div className="mx-[10vw]"><img src="/about_group.svg" alt="MyApp Logo" className='w-full block'/></div>

      <div className="mx-[10vw] mb-40">
      <h1 className="main-heading">
          <span className="font-bold">Mission</span>
        </h1>
        <p className="paragraph-large">
        As a sound engineer, my mission is to craft sonic experiences that transcend the ordinary. Whether it's breathing  <span className="font-bold">life into live events, capturing the soul of musical creativity in my studio recordings,</span> meticulously balancing elements in the mixing process, or adding the final touch of perfection through mastering,  <span className="font-bold">I am dedicated to elevating sound to an art form.</span> My commitment to continuous innovation, collaborative partnerships with artists, and sustainable practices ensures that I not only meet but exceed my clients' expectations, turning sound into an unforgettable masterpiece.
          <span className="font-bold">

          </span>{" "}
        </p>


 
      </div>
    </div>
  );
}
