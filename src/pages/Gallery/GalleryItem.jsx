const GalleryItem = ({ image, setSelectedImage }) => {
  return (
    <div className="break-inside-avoid">
      <div
        className="relative group cursor-pointer"
        onClick={() => setSelectedImage(image)}
      >
        <img
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          className="rounded-lg w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      </div>
    </div>
  );
};

export default GalleryItem;
