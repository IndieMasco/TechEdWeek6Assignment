import "./LargeImage.css";

export default function LargeImage({ selectedImage, setSelectedImage, items }) {
  const handleNext = () => {
    if (items.length > 0 && selectedImage) {
      const currentIndex = items.findIndex(
        (item) => item.id === selectedImage.id
      );
      const nextIndex = (currentIndex + 1) % items.length;
      setSelectedImage(items[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (items.length > 0 && selectedImage) {
      const currentIndex = items.findIndex(
        (item) => item.id === selectedImage.id
      );
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      setSelectedImage(items[prevIndex]);
    }
  };

  return (
    <>
      {/* Large image and buttons */}
      {selectedImage && (
        <div className="main-image-container">
          <h2>{selectedImage.title}</h2>
          <div className="image-button-container">
            <button onClick={handlePrevious} className="button">
              Previous
            </button>
            <img src={selectedImage.url} alt={selectedImage.alt} />
            <button onClick={handleNext} className="button">
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
