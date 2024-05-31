import React from "react";

// Define a functional component named Meme
export default function Meme() {
  // Declare state variables for the meme object and all memes array
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg", // Initial random image URL
  });
  const [allMemes, setAllMemes] = React.useState([]);

  // useEffect to fetch memes from the API when the component mounts
  React.useEffect(() => {
    async function getMemes() {
      // Fetch memes data from the API
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      // Update the state with the fetched memes
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  // Function to get a random meme image from the fetched memes
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  // Function to handle input changes for top and bottom text
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
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
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="and take my money"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          ></input>
        </label>

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
