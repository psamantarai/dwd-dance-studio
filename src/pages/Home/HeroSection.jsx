import Button from "../../components/Button";
import HighlightText from "../../components/HighlightText";
import HeroImage from "../../assets/hero-1.jpg";
import HeroGroupImage from "../../assets/home-page-2.png";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl w-11/12 text-white flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <h1 className="mt-6 text-3xl sm:text-4xl text-center font-semibold font-inter">
          <HighlightText>Discover the Rhythm: </HighlightText> Join Our Vibrant
          Dance Community Today
        </h1>
        <p className="mt-6 w-[90%] text-center text-base text-richblack-300">
          At our Dance studio, we celebrate movement and creativity, offering a
          diverse range of classes for all ages and skill levels. Join us to
          unleash your passion for dance and connect with a community that
          inspires.
        </p>
      </div>
      <img src={HeroImage} className="my-7" />
      {/* <video
        src={DanceVideo}
        muted
        autoPlay
        loop
        className="absolute top-0 left-0 object-cover h-full w-full "
      ></video> */}

      <div className="mt-10 flex sm:flex-row justify-between flex-col gap-10">
        {/* Section 1  */}
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
          <div className="text-4xl font-semibold">
            Grace in Motion: The Story of Our
            <HighlightText text={" Studio "} />
            and its <HighlightText text={" Stars"} />.
          </div>

          {/* Sub Heading */}
          <div className="w-[90%] text-base text-richblack-300">
            At DWD Dance Studio, we celebrate the art of dance with classes in
            genres like jazz, tap, and modern dance. With talented instructors
            and a welcoming environment, every step you take is a step toward
            unleashing your inner artist.
          </div>
          {/* Button Group */}
          <div className="flex gap-7 ">
            <Button active={true} linkto={"/about"}>
              <div className="flex items-center gap-2">Know more</div>
            </Button>
          </div>
        </div>

        {/* Section 2 */}
        <div className="h-fit flex flex-row py-3 text-[10px] w-[100%] lg:w-[470px]">
          <img src={HeroGroupImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
