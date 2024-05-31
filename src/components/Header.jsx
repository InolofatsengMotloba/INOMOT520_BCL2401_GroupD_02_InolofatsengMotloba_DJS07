import React from "react";

// Define a functional component named Header
export default function Header() {
  return (
    // Return a header element with a class name of "header"
    <header className="header">
      <img src="./src/images/troll-face.png" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
