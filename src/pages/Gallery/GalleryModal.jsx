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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
    <div className="relative w-full max-w-7xl">
      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute -top-12 right-0 text-white hover:text-gray-300"
      >
        <X size={24} />
      </button>  
      {/* Image Viewer */}
      <div className="flex items-center justify-between w-[85%] md:w-full">
        {/** Previous Button */}
        <button onClick={handlePrev} className="nav-btn">
          <ChevronLeft size={24} />
        </button>
  
        <img
          src={selectedImage?.src || "/placeholder.svg"}
          alt={selectedImage?.alt || "Image preview"}
          className="max-h-[80vh] w-auto max-w-[90%] object-contain rounded-lg"
        />
  
        {/** Next Button */}
        <button onClick={handleNext} className="nav-btn flex-shrink-0">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default GalleryModal;
