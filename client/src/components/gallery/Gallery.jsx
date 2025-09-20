import { useState, useEffect } from "react";
import LargeImage from "./largeImage/LargeImage";
import "./Gallery.css";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_FROG_API);
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

  return (
    <div className="gallery-container">
      {/* Thumbnail */}
      <div className="thumbnails-container">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedImage(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedImage(item);
              }
            }}
            className={`thumbnail-button ${
              selectedImage?.id === item.id ? "active" : ""
            }`}
            aria-label={`Select image of ${item.alt}`}
          >
            <img src={item.url} alt={item.alt} className="thumbnail-image" />
          </button>
        ))}
      </div>

      {/* Large image and Buttons */}
      <LargeImage
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        items={items}
      />
    </div>
  );
}
