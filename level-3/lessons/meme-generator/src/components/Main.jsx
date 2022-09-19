import React, { useState } from "react";
import memeImage from "../images/memeimg.png";
export default function Main(props) {
  const [meme, setMeme] = React.useState({
    image: "https://i.imgflip.com/1e7ql7.jpg",
    topText: "Enter",
    botText: "Your Own Text"
  });
  const [leftInput, setLeftInput] = useState();
  const [rightInput, setRightInput] = useState();

  const allImages = props.data.data.memes[Math.floor(Math.random() * 100)].url;

  function memeClick(e) {
    e.preventDefault();
    setMeme((prev) => ({
      ...prev,
      image: allImages,
      topText: leftInput,
      botText: rightInput,
    }));
    setLeftInput("");
    setRightInput("");
  }

  function onChangeLeft(e) {
    setLeftInput(e.target.value);
  }
  function onChangeRight(e) {
    setRightInput(e.target.value);
  }

  return (
    <div>
      <form onSubmit={memeClick}>
        <div className="main-div">
          <input
            required
            onChange={onChangeLeft}
            value={leftInput}
            className="input-1"
          />
          <input
            required
            onChange={onChangeRight}
            value={rightInput}
            className="input-2"
          />
          <button className="button">Get a new meme image</button>
          <img className="meme-image" src={meme.image} />
          <h1 className="top-text">{meme.topText}</h1>
          <h1 className="bottom-text">{meme.botText}</h1>
        </div>
      </form>
    </div>
  );
}
