import React, { useState, useEffect } from "react";
import "./styles.scss";

const WordInput = ({ city, lastStage, endPlay, setEndPlay, setIsLostGame }) => {
  const [guessWord, setGuessWord] = useState("");
  const [inputShow, setInputShow] = useState(false);
  let visibility = inputShow ? " visible" : " invisible";

  useEffect(() => {
    if (lastStage) {
      setInputShow(true);
    }
  }, [lastStage]);

  useEffect(() => {
    if (endPlay) {
      setInputShow(false);
    }
  }, [endPlay]);

  const changeHandle = (evt) => {
    setGuessWord(evt.target.value);
  };

  const clickHandle = () => {
    setInputShow(false);
    if (guessWord.toUpperCase() === city) {
      setEndPlay(true);
    } else {
      setIsLostGame(true);
    }
  };

  console.log("guessWord", guessWord);
  return (
    <div className={`word ${visibility}`}>
      <input type="text" value={guessWord} onChange={changeHandle} />
      <button onClick={clickHandle}>Submit</button>
    </div>
  );
};

export default WordInput;
