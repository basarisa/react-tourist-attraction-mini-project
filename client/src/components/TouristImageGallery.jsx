import React from "react";

const TouristImageGallery = ({ photos = [], title }) => {
  if (!Array.isArray(photos)) {
    console.error("Expected 'photos' to be an array.");
    return null; // Or some fallback UI
  }

  return (
    <div className="flex flex-row gap-2 mb-2 ">
      {photos.slice(1).map((photo, index) => (
        <img
          className="w-[6rem] h-[6rem] m-2 rounded-xl"
          key={index}
          src={photo}
          alt={`${title} - ${index + 2}`}
        />
      ))}
    </div>
  );
};

export default TouristImageGallery;
