import { useState } from "react";
import GalleryItem from "./GalleryItem";
import GalleryModal from "./GalleryModal";
import HighlightText from "../../components/HighlightText";

import img3 from "../../assets/gallery/img3.jpeg";
import img37 from "../../assets/gallery/img37.jpeg";
import img36 from "../../assets/gallery/img36.jpeg";
import img4 from "../../assets/gallery/img4.jpeg";

import { galleryImages } from "./galleryImages";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-10 text-4xl font-semibold lg:w-[70%]">
            Inspiring Creativity in Dance for a <br />
            <HighlightText text={"Brighter Tomorrow"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              DWD Studio is at the forefront of transforming dance education.
              We&apos;re passionate about shaping a brighter future by offering
              diverse dance styles, embracing creativity, and fostering a
              supportive and vibrant dance community.
            </p>
          </header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>

          <div className="absolute bottom-0 left-[50%] w-[100%] translate-x-[-50%] translate-y-[30%] grid grid-cols-4 gap-3 lg:gap-3 justify-center items-center text-center">
            <img
              className="w-full h-auto max-h-64 object-contain"
              src={img3}
              alt="BannerImage1"
            />
            <img
              className="w-full h-auto max-h-64 object-contain"
              src={img37}
              alt="BannerImage2"
            />
            <img
              className="w-full h-auto max-h-64 object-contain"
              src={img36}
              alt="BannerImage3"
            />

            <img
              className="w-full h-auto max-h-64 object-contain"
              src={img4}
              alt="BannerImage3"
            />
          </div>
        </div>
      </section>

      <div className="text-center mb-16 px-4 mt-28">
        <h1 className="text-4xl md:text-5xl font-bold">OUR DANCE GALLERY</h1>
      </div>

      <div className="p-4 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {galleryImages.map((image) => (
          <GalleryItem
            key={image.id}
            image={image}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>

      {selectedImage && (
        <GalleryModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

export default Gallery;
