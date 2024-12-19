import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./certificate.scss";

// Individual Image Component
const ImageComponent = ({ src, alt, onClick }) => (
  <motion.div
    className="image-container"
    whileHover={{ scale: 1.1 }} // Scale up on hover
    whileTap={{ scale: 0.9 }}  // Scale down on tap
    onClick={() => onClick(src)} // Trigger full-size view on click
  >
    <img src={src} alt={alt} className="image" />
  </motion.div>
);

// Full-Size Modal Component
const FullSizeImageModal = ({ src, onClose }) => (
  <AnimatePresence>
    {src && (
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.img
          src={src}
          alt="Full Size"
          className="modal-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    )}
  </AnimatePresence>
);

// Main App Component
const CertificateUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [startIndex, setStartIndex] = useState(0); // State for carousel start index

  const images = [
    { src: "/src/components/certificate/Screenshot (1890).png", alt: "Image 1" },
    { src: "/src/components/certificate/101th.jpg", alt: "Image 2" },
    { src: "/src/components/certificate/alok 10th marksheet.jpg", alt: "Image 3" },
    { src: "/src/components/certificate/12th_marksheet.jpg", alt: "Image 4" },
    { src: "/src/components/certificate/degree.jpg", alt: "Image 5" },
  ];

  // Handle navigation
  const handleNext = () => {
    if (startIndex < images.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Get the visible images
  const visibleImages = images.slice(startIndex, startIndex + 3);

  return (
    <div>
      <h1>Certificates</h1>
      <div className="image-row">
        {visibleImages.map((image, index) => (
          <ImageComponent
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={setSelectedImage} // Pass setSelectedImage as a prop
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={handlePrev} disabled={startIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={startIndex >= images.length - 3}>
          Next
        </button>
      </div>

      {/* Full-size image modal */}
      <FullSizeImageModal
        src={selectedImage}
        onClose={() => setSelectedImage(null)} // Close modal on click
      />
    </div>
  );
};

export default CertificateUpload;
