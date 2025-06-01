
import IntroSection from '../components/custom/IntroSection'
import WorkGallery from "../components/custom/WorkGallery"
import SpotifyPlayer from "../components/custom/SpotifyPlayer"
export default function Home() {
  return (
    <div className="">
      <img src="/banner.png" alt="MyApp Logo" className='w-screen block'/>
    <IntroSection></IntroSection>
    <WorkGallery></WorkGallery>
    <SpotifyPlayer></SpotifyPlayer>
    </div>
  );
}
