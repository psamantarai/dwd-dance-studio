import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import InstructorSection from "./InstructorSection";
import VideoSection from "./VideoSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <InstructorSection />
      <VideoSection />
      <GallerySection />
    </main>
  );
};

export default Home;
