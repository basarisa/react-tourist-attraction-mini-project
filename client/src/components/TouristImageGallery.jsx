import React from "react";

function TouristImageGallery(photos, title) {
  if (!Array.isArray(photos) || photos.length <= 1) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {photos.slice(1).map((photo, index) => (
        <img
          className="w-24 h-24 m-2 rounded-xl"
          key={index}
          src={photo}
          alt={`${title} - ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default TouristImageGallery;
