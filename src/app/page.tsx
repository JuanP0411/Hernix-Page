
import IntroSection from '../components/custom/IntroSection'
import WorkGallery from "../components/custom/WorkGallery"
import SpotifyPlayer from "../components/custom/SpotifyPlayer"

export default function Home() {
  return (
    <div className="">
      <img src="/hernix1.svg" alt="MyApp Logo" className='w-full block'/>
      <WorkGallery 
      />
      <SpotifyPlayer></SpotifyPlayer>
      <IntroSection></IntroSection>
    </div>
  );
}
