import React, { useState, useEffect } from "react";
import axios from "axios";

function BodyList() {
  const [input, setInput] = useState("");
  const [touristInfo, setTouristInfo] = useState([]);

  const touristInfoList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${input}`
      );
      console.log(response.data);
      setTouristInfo(response.data.data); // สมมติว่า response.data.data เป็นอาร์เรย์
    } catch (error) {
      console.error("Error fetching tourist info:", error);
    }
  };

  useEffect(() => {
    if (input) {
      touristInfoList();
    }
  }, [input]); // เรียกเมื่อ input เปลี่ยน

  return (
    <section className="p-6">
      <header>
        <div className="App">
          <h1 className="text-3xl font-bold underline text-red-600">
            เที่ยวไหนดี
          </h1>
          <h3>ค้นหาที่เที่ยว</h3>
          <input
            className="input"
            placeholder="หาที่เที่ยวแล้วไปกัน..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <hr />
        </div>
      </header>
      <div>
        {touristInfo.length > 0 ? (
          touristInfo.map((item, index) => (
            <div key={index} className="mb-6 border p-4 rounded shadow">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-700 mb-2">
                {item.description.length > 100
                  ? `${item.description.substring(0, 100)}...`
                  : item.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {item.photos.map((photo, photoIndex) => (
                  <img
                    key={photoIndex}
                    src={photo}
                    alt={`${item.title} - ${photoIndex + 1}`} // ใช้ backticks
                    style={{ width: "200px", margin: "5px" }}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </section>
  );
}
export default BodyList;

