import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "./galleryImages";

const GalleryModal = ({ selectedImage, setSelectedImage }) => {
  const currentIndex = galleryImages.findIndex(
    (img) => img.id === selectedImage?.id
  );

  const handlePrev = () => {
    if (currentIndex > 0) setSelectedImage(galleryImages[currentIndex - 1]);
  };

  const handleNext = () => {
    if (currentIndex < galleryImages.length - 1)
      setSelectedImage(galleryImages[currentIndex + 1]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-7xl w-full">
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute -top-12 right-0 text-white hover:text-gray-300"
        >
          <X size={24} />
        </button>
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="p-2 text-white hover:text-gray-300"
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={selectedImage?.src || "/placeholder.svg"}
            alt={selectedImage?.alt}
            className="max-h-[80vh] w-auto object-contain rounded-lg"
          />
          <button
            onClick={handleNext}
            className="p-2 text-white hover:text-gray-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
