import HighlightText from "../../components/HighlightText";
import InstructorImage from "../../assets/instructor.png";

const InstructorSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto py-16 max-w-screen-xl w-11/12 flex flex-col gap-8 sm:flex-row">
        <div className="flex flex-col sm:w-[50%]">
          <h1 className="text-3xl sm:text-4xl font-semibold font-inter">
            Meet Our <br />
            <HighlightText>Passionate Dance Instructor</HighlightText>
          </h1>
          <div className="mt-9">
            <p className="text-3xl text-richblack-400 font-semibold">Divya P</p>
            <p className="text-lg text-richblack-200 font-bold">
              Artistic Founder (DWD Studio)
            </p>
            <p className="mt-7 text-xl text-richblack-300 font-medium sm:w-[80%]">
              Divya who heads dwd studio is a choreographer/performer. Besides
              enthralling audiences on stage, she is well-versed in, hip-hop,
              free style, semi-classical, waacking, bollywood, filmy folk. Her
              students include album actors, singers, industrialists and
              corporates. She also choreographs dance sequences for culural
              events of schools, colleges and corporate as well as for weddings.
              She has choreographed over 1000+ such shows since 2018.
            </p>
          </div>
        </div>
        <div className="shadow-[10px_11px_0px_0px_yellow]">
          <img src={InstructorImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
