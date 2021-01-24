import React, { useState, useEffect } from "react";
import "./styles.scss";

const Prompt = ({ city, onPlay, endPlay, isLostGame, clickedLetters }) => {
  const [prompt, setPrompt] = useState(
    "Select 6 letters before guessing the name of a city in the US."
  );

  useEffect(() => {
    if (onPlay && endPlay === false) {
      const arrCity = [...city];
      const clickedLettersLength = clickedLetters.length;
      const clickedLetter = clickedLetters[clickedLettersLength - 1];
      const letterLoc = arrCity.indexOf(clickedLetter);
      let prompText;
      if (clickedLettersLength === 6) {
        prompText = "What is the word?";
      } else if (clickedLettersLength === 0) {
        prompText = "Guess 6 letters:";
      } else if (clickedLettersLength < 5) {
        if (letterLoc === -1) {
          prompText = `No letter ${clickedLetter}! 
          Guess ${6 - clickedLettersLength} letters:`;
        } else {
          prompText = `There is letter ${clickedLetter}!
            Guess ${6 - clickedLettersLength} letters:`;
        }
      } else {
        if (letterLoc === -1) {
          prompText = `No letter ${clickedLetter}!
            Guess a last letter:`;
        } else {
          prompText = `There is letter ${clickedLetter}!
            Guess a last letter:`;
        }
      }
      setPrompt(prompText);
    }
  }, [onPlay, city, clickedLetters, endPlay]);

  useEffect(() => {
    if (endPlay && !isLostGame) {
      setPrompt("You guessed it!!!");
    } else if (isLostGame) {
      setPrompt("That is incorrect. You lost the game!!!");
    }
  }, [endPlay, isLostGame]);

  return (
    <div>
      <p className={`prompt ${endPlay || isLostGame ? "flicker" : null}`}>
        {prompt}
      </p>
    </div>
  );
};

export default Prompt;
