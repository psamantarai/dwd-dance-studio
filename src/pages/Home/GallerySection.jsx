import Button from "../../components/Button";
import HighlightText from "../../components/HighlightText";
import GridGallery from "./GridGallery";
import { FaLongArrowAltRight } from "react-icons/fa";

const GallerySection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto py-16 max-w-screen-xl w-11/12 flex flex-col gap-8 sm:flex-row">
        <div className="flex flex-col  justify-center sm:w-[50%]">
          <h1 className="text-3xl sm:text-4xl font-semibold font-inter">
            Moment Capture Through the <br />
            <HighlightText>Art of Dance</HighlightText>
          </h1>
          <p className="mt-7 text-xl text-richblack-300 font-medium sm:w-[80%]">
            Witness the grace, energy, and passion that define every movement in
            our studio. From classical ballet to modern hip-hop, each moment
            tells a unique story. Our dancers, driven by creativity and
            dedication, transform every step into art. Immerse yourself in the
            rhythm and discover the beauty of expression through dance.
          </p>
          <div className="w-[50%] sm:w-[30%] mt-6 ">
            <Button active={true}>
              Take a Look <FaLongArrowAltRight />{" "}
            </Button>
          </div>
        </div>
        <div className="sm:w-[50%]">
          <GridGallery />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
