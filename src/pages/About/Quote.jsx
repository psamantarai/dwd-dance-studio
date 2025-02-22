import HighlightText from "../../components/HighlightText";

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
      We are passionate about redefining the way we experience dance. Our
      vibrant studio <HighlightText text={"combines creativity"} />,{" "}
      <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
        {" "}
        expertise{" "}
      </span>
      and community to offer an
      <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
        {" "}
        inspiring and transformative dance journey.
      </span>
    </div>
  );
};

export default Quote;
