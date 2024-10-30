import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import TouristItem from "./TouristItem";

function BodyList() {
  const [input, setInput] = useState("");
  const [touristInfo, setTouristInfo] = useState([]);

  const touristInfoList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${input}`
      );
      console.log(response.data);
      setTouristInfo(response.data.data); 
    } catch (error) {
      console.error("Error fetching tourist info:", error);
    }
  };

  useEffect(() => {
    touristInfoList();
  }, [input]);

  return (
    <section className="flex-row-reverse p-20 font-medium font-PlexSansThai space-x-20">
      <Header input={input} setInput={setInput} />
      <div>
        {touristInfo.map((item, index) => (
          <TouristItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default BodyList;
