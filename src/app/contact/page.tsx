

import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'] })

export default function AboutMe() {
    return (
      <div className="">
        <Image src="/Contact.svg" alt="MyApp Logo" width={1200} height={400} className='w-full block'/>
        <div className="w-full px-6 md:px-12 lg:px-[10vw]">
        <h1 className="text-xl md:text-3xl lg:text-6xl text-left text-white mt-12 mb-8 font-extralight">
        Bring your sound 
            <span className="font-bold"> to the next nevel</span>

          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-40 mb-25">
            {/* Left Column */}
            <div className="space-y-6 w-full self-start">
              <form className={`${poppins.className} space-y-4`}>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-light text-white">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-[#9A9A9A] bg-transparent px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#9A9A9A] focus:border-[#9A9A9A]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-light text-white">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-[#9A9A9A] bg-transparent px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#9A9A9A] focus:border-[#9A9A9A]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-light text-white">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-[#9A9A9A] bg-transparent px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#9A9A9A] focus:border-[#9A9A9A]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-[30%] rounded-md px-4 py-3 font-light text-white transition-colors"
                  style={{ backgroundColor: 'var(--color-button-gold)' }}
                >
                  Send
                </button>
              </form>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6 flex flex-col items-stretch justify-center w-full">
            <Image src="/gold_logo.svg" alt="MyApp Logo" width={300} height={300} sizes="100vw" style={{ width: '60%', height: 'auto' }} className='block ml-8 sm:ml-14 md:ml-20 lg:ml-28 xl:ml-36 mb-6 md:mb-8'/>
            </div>
          </div>

  
   

  
  
   
        </div>
      </div>
    );
  }
  