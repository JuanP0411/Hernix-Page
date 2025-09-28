

import Image from 'next/image'

export default function AboutMe() {
    return (
      <div className="">
        <Image src="/Contact.svg" alt="MyApp Logo" width={1200} height={400} className='w-full block'/>
        <div className="mx-[10vw]">
        <h1 className="text-xl md:text-3xl lg:text-6xl text-left text-white mt-12 mb-8 font-extralight">
        Bring your sound 
            <span className="font-bold"> to the next nevel</span>

          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-40 mb-25">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="paragraph-large">
                Hi! My name is Juan Felipe Hernandez, <span className="font-bold">but everyone calls me Hernix</span>. I&apos;m a Sound Engineer and Producer from Colombia who loves to work with artists to help them create their new hits!
              </p>
              <p className="paragraph-large">
                I started in music as a drummer but my passion for technology made me interested in Post Production for Music. I also love making the sound for live concerts and events.
              </p>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6 flex flex-col items-center justify-center">
            <Image src="/gold_logo.svg" alt="MyApp Logo" width={300} height={300} className='w-[50%]'/>
            </div>
          </div>

  
   

  
  
   
        </div>
      </div>
    );
  }
  