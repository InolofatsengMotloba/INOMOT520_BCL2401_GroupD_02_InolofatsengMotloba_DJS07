import React from "react";

export default function Meme() {
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="Shut up"
            className="form--input"
          ></input>
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="and take my money"
            className="form--input"
          ></input>
        </label>

        <button className="form--button">Get a new meme image 🖼️</button>
      </div>
    </main>
  );
}
