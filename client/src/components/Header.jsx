import React from "react";

function Header({ input, setInput }) {
  return (
    <header className="mx-36 ">
      <div className="space-y-3">
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
  );
}

export default Header;
