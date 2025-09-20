import { useState } from "react";
import "./Buttons.css";

export default function Button() {
  const [items] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNext = () => {
    if (items.length > 0) {
      const currentIndex = items.findIndex(
        (item) => item.id === selectedImage.id
      );
      const nextIndex = (currentIndex + 1) % items.length;
      setSelectedImage(items[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (items.length > 0) {
      const currentIndex = items.findIndex(
        (item) => item.id === selectedImage.id
      );
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      setSelectedImage(items[prevIndex]);
    }
  };

  return (
    <div className="image-button-container">
      <button onClick={handlePrevious} className="button">
        Previous
      </button>
      <button onClick={handleNext} className="button">
        Next
      </button>
    </div>
  );
}
