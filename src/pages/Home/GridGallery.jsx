import HomeGalleryImage1 from "../../assets/home-gallery-1.png";
import HomeGalleryImage2 from "../../assets/home-gallery-2.png";
import HomeGalleryImage3 from "../../assets/home-gallery-3.png";
import HomeGalleryImage4 from "../../assets/home-gallery-4.png";
import HomeGalleryImage5 from "../../assets/home-gallery-5.png";
import HomeGalleryImage6 from "../../assets/home-gallery-6.png";

export default function GridGallery() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={HomeGalleryImage1}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={HomeGalleryImage2}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={HomeGalleryImage3}
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={HomeGalleryImage4}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src={HomeGalleryImage5}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={HomeGalleryImage6}
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
  );
}
