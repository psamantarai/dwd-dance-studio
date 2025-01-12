import DanceVideo from "../../assets/video.mp4";
const VideoSection = () => {
  return (
    <section className="relative h-[300px] sm:h-[600px] opacity-35">
      <video
        src={DanceVideo}
        muted
        autoPlay
        loop
        className="absolute top-0 left-0 object-cover h-full w-full "
      ></video>
    </section>
  );
};

export default VideoSection;
