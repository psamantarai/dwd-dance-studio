import CustomerTestimonialSection from "./CustomerTestimonialSection";
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
      <CustomerTestimonialSection />
    </main>
  );
};

export default Home;
