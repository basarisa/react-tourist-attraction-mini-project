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
    <section className="p-6">
      <header>
        <div className="App">
          <h1 className="text-3xl font-bold underline text-red-600 font-NotoSansThai">
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
              className="w-48 rounded-2xl"
              key={0} // ใช้ 0 เป็นคีย์
              src={item.photos[0]} // แสดงเฉพาะรูปภาพแรก
              alt={`${item.title} - 1`} // ใช้ backticks
              style={{ width: "200px", margin: "5px" }}
            />
            <div className="flex flex-col ">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-700 mb-2 ">
                {item.description.length > 100
                  ? `${item.description.substring(0, 100)}... `
                  : item.description}
                <br />
                <a
                  href={item.url} // ลิงค์ที่จะเปิดเมื่อคลิก
                  target="_blank" // เปิดลิงค์ในแท็บใหม่
                  rel="noopener noreferrer" // เพิ่มความปลอดภัย
                  className="text-blue-500 underline" // เพิ่มสไตล์ให้ลิงค์
                >
                  อ่านต่อ
                </a>
              </p>
              <div>
                <span>หมวด</span>
                {item.tags.map((tag, index) => (
                  <span key={index}>
                    {index > 0 && index === item.tags.length - 1 ? "และ" : null}
                    <a
                      href={tag}
                      className="text-gray-800 underline px-3 py-1 rounded-full text-sm"
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
                      className="w-48 m-8 rounded-2xl"
                      key={photoIndex} // ใช้ photoIndex เพราะไม่ต้องเพิ่มค่า
                      src={photo}
                      alt={`${item.title} - ${photoIndex + 1}`} // ใช้ backticks
                      style={{ width: "200px", margin: "5px" }}
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
