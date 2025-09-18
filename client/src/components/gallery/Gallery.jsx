import { useState, useEffect } from "react";

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

  return (
    <div className="gallery-container">
      <h1>The Ribbiting World of Frogs</h1>

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

      {/* Large image */}
      <div className="main-image-container">
        <h2>{selectedImage.title}</h2>
        <img src={selectedImage.url} alt={selectedImage.alt} />
      </div>
    </div>
  );
}
