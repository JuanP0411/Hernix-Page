import React from 'react'

export default function IntroSection() {
  return (
    <div className="mx-[10vw] mt-[4vh] mb-[13vh] h-full flex flex-col">
      {/* Title and paragraph */}
      <div>
        <h1 className="main-heading">
          <span className=" font-light">Turn Up</span>{' '}
          <span className="font-bold">Your Vision</span>
        </h1>
        <p className="paragraph">
          Hi! My name is Juan Felipe Hernandez, but everyone calls me{' '}
          <span className="font-bold">Hernix. I'm a Sound Engineer and Producer</span> from Colombia who loves to work with artists to help them{' '}
          <span className="font-bold">create their new hits!</span> I started in music as a drummer, but my passion for technology made me interested in{' '}
          <span className="font-bold">Post Production for Music.</span> I am certified by Berklee College of Music Boston in{' '}
          <span className="font-bold">Pro Tools Professional, and a Certified Dante and RedNet User Level 2 by Focusrite at Full Sail University.</span>
        </p>
        {/* Service menu */}
        <div className="w-full flex flex-col gap-10">
          {/* First row - left aligned */}
          <div className="flex justify-between">
            <div className="menu-item">
              mixing
            </div>
            <div className="menu-item">
              mastering
            </div>
            <div className="menu-item">
              live sound
            </div>
            <div className="menu-item">
              dobly atmos mix
            </div>
          </div>
          {/* Second row - centered */}
          <div className="flex justify-center gap-32">

            <div className="menu-item">
              recording
            </div>
            <div className="menu-item">
              production
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
