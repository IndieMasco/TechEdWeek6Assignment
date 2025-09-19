import { useState, useEffect } from "react";
import "./Gallery.css";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data);
      if (data.length > 0) {
        setSelectedImage(data[0]);
      }
    }
    fetchData();
  }, []);

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
    <div className="gallery-container">
      <h1 className="header">The Ribbiting World of Frogs</h1>

      {/* Thumbnail */}
      <div className="thumbnails-container">
        {items.map((item) => (
          <img
            key={item.id}
            src={item.url}
            alt={item.alt}
            onClick={() => setSelectedImage(item)}
            className={`thumbnail-image ${
              selectedImage?.id === item.id ? "active" : ""
            }`}
          />
        ))}
      </div>

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
    </div>
  );
}
