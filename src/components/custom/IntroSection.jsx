import React from 'react'

export default function IntroSection() {
  return (
    <div className="mx-[10vw] my-[4vh] h-full flex flex-col">
      {/* Title and paragraph */}
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-left text-white mt-12 mb-8">
          <span className=" font-light">Turn Up</span>{' '}
          <span className="font-bold">Your Vision</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-white mb-10 font-light">
          Hi! My name is Juan Felipe Hernandez, but everyone calls me{' '}
          <span className="font-bold">Hernix. I'm a Sound Engineer and Producer</span> from Colombia who loves to work with artists to help them{' '}
          <span className="font-bold">create their new hits!</span> I started in music as a drummer, but my passion for technology made me interested in{' '}
          <span className="font-bold">Post Production for Music.</span> I am certified by Berklee College of Music Boston in{' '}
          <span className="font-bold">Pro Tools Professional, and a Certified Dante and RedNet User Level 2 by Focusrite at Full Sail University.</span>
        </p>
      </div>

      {/* Bottom menu with plain HTML */}
      <nav className="w-full">
      <ul className="flex justify-between w-full">
      <li className="text-center text-intro-menu text-2xl md:text-4xl lg:text-4xl cursor-pointer font-extralight">
  music production
</li>
<li className="text-center text-intro-menu text-2xl md:text-4xl lg:text-4xl cursor-pointer font-extralight">
  recording
</li>
<li className="text-center text-intro-menu text-2xl md:text-4xl lg:text-4xl cursor-pointer font-extralight">
  mixing
</li>

</ul>

      </nav>
    </div>
  )
}
