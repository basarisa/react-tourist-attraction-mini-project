import React from "react";
import TouristImageGallery from "./TouristImageGallery";

function TouristItem({item}) {
  return (<div className="flex flex-row mb-6 border p-4 rounded shadow space-x-10">
      <img
        className="rounded-3xl w-96"
        src={item.photos[0]}
        alt={`${item.title} - 1`}
      />
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">{item.title}</h2>
        <p className="text-gray-500 font-normal mb-2">
          {item.description.length > 100
            ? `${item.description.substring(0, 100)}... `
            : item.description}
          <br />
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 underline"
          >
            อ่านต่อ
          </a>
        </p>
        <div>
          <span className="text-gray-500">หมวด</span>
          {item.tags.map((tag, index) => (
            <span className="text-gray-500 text-sm" key={index}>
              {index > 0 && index === item.tags.length - 1 ? "และ" : null}
              <a
                href={tag}
                className="text-gray-500 underline px-3 py-1 rounded-full text-base"
              >
                {tag}
              </a>
            </span>
          ))}
        </div>
        <TouristImageGallery photos={item.photos} title={item.title} />
      </div>
    </div>
  );
}

export default TouristItem;
