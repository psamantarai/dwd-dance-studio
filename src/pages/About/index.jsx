import HighlightText from "../../components/HighlightText";
import Quote from "./Quote";
import StatsComponent from "./Stats";
import ClassesGrid from "./ClassesGrid";
import AboutUSImage1 from "../../assets/about-us-1.png";
import AboutUSImage2 from "../../assets/about-us-2.png";
import AboutUSImage3 from "../../assets/about-us-3.png";
import FoundingStory from "../../assets/FoundingStory.jpeg";

const About = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Inspiring Creativity in Dance for a <br />
            <HighlightText text={"Brighter Tomorrow"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              DWD Studio is at the forefront of transforming dance education.
              We're passionate about shaping a brighter future by offering
              diverse dance styles, embracing creativity, and fostering a
              supportive and vibrant dance community.
            </p>
          </header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>

          <div className="absolute bottom-0 left-[50%] w-[100%] translate-x-[-50%] translate-y-[30%] grid grid-cols-3 gap-3 lg:gap-5 justify-center items-center text-center">
            <img className="mx-auto" src={AboutUSImage2} alt="BannerImage1" />
            <img className="mx-auto" src={AboutUSImage3} alt="BannerImage2" />
            <img className="mx-auto" src={AboutUSImage1} alt="BannerImage3" />
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      {/* section 3 */}
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>

              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                DWD Studio is Bangalore's pioneer professional dance school
                formed in 2018. A strong passion for dance along with
                dedication, discipline and hard work has helped DWD take dance
                to new heights. Over the last 7 years Divya , the artistic
                founder of DWD has put her mind, heart and soul in gradually
                creating not just a successful dance school but has also made
                DWD an "Entertainment Destination”
              </p>

              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                DWD has successfully performed at more than 300 shows all over
                Bangalore and which includes Product Launches, Celebrity
                Shows,TV reality shows, Movie songs, Album songs ,Commercial
                Events & Corporate Events.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt="FoundingStory"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>

              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                To be a haven of creativity, inspiration, and inclusivity, where
                individuals of all ages and backgrounds come together to explore
                the art of dance, unlock their full potential, and foster a deep
                love for movement, music, and self-expression.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>

              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission is to foster a love for dance while building
                self-confidence, discipline, and respect for the performing
                arts. We provide a strong technical foundation and equip dancers
                to pursue their dreams. Our skilled instructors tailor learning
                to each student’s needs, emphasizing personal growth, teamwork,
                and the enriching power of the arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <StatsComponent />

      {/* section 5 */}
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <ClassesGrid />
      </section>
    </div>
  );
};

export default About;
