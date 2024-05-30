import React from "react";
import memesData from "../memesData";

export default function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }

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

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
    </main>
  );
}
