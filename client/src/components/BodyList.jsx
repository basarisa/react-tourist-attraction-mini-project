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
    touristInfoList();
  }, [input]); // เรียกเมื่อ input เปลี่ยน

  return (
    <section className=" p-6 font-medium font-PlexSansThai ">
      <header className="">
        <div className="App">
          <h1 className="text-5xl font-semibold  text-[#2b9fd5] text-center">
            เที่ยวไหนดี
          </h1>
          <h3>ค้นหาที่เที่ยว</h3>
          <input
            className="text-center w-full focus:outline-none focus:ring-1 focus:ring-transparent"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <hr className="mb-4" />
        </div>
      </header>
      <div>
        {touristInfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-row mb-6 border p-4 rounded shadow space-x-10"
          >
            <img
              className="rounded-3xl w-96"
              key={0}
              src={item.photos[0]}
              alt={`${item.title} - 1`}
            />
            <div className="flex flex-col ">
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

              <div className="flex flex-wrap gap-2 mb-2 ">
                {item.photos
                  .slice(1) // เริ่มต้นจาก index 1
                  .map((photo, photoIndex) => (
                    <img
                      className="w-24 h-24 m-2 rounded-xl"
                      key={photoIndex} // ใช้ photoIndex เพราะไม่ต้องเพิ่มค่า
                      src={photo}
                      alt={`${item.title} - ${photoIndex + 1}`} // ใช้ backticks
                    />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default BodyList;
