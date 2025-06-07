
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`${title} - صورة ${index + 1}`}
            className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-screen p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <img
              src={images[selectedImage]}
              alt={`${title} - صورة ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
