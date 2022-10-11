import React from "react";

export default function Main() {
  //meme state with default value
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    randomImage: "./memeimg.png",
  });

  //getting all data from the API
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((newData) => setAllMemeImages(newData.data.memes));
  }, []);

  const [allMemeImages, setAllMemeImages] = React.useState();

  //Pick a random data (image url) from the data array
  let url;
  function getMemeImage() {
    const memesArray = allMemeImages; //the memes array received from the API to the state
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    //update the meme state

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
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
