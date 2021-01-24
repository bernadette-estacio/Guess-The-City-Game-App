import React, { useState, useEffect } from "react";
import alphabet from "../Letters/alphabet";
import "./styles.scss";

const Letters = ({
  onPlay,
  endPlay,
  setLastStage,
  clickedLetters,
  setClickedLetters,
}) => {
  const createLetterBoxes = () => {
    const data = [];
    alphabet.forEach((letter) =>
      data.push({ id: letter, visibility: "visible" })
    );
    return data;
  };

  const [letterBoxes, setletterBoxes] = useState(createLetterBoxes);

  useEffect(() => {
    if (clickedLetters.length === 6) {
      setletterBoxes([]);
      setLastStage(true);
    }
  }, [clickedLetters]);

  const clickLetterHandle = (letter) => {
    const newLetterBoxes = letterBoxes.map((letterBox) => {
      if (letterBox.id === letter) {
        letterBox.visibility = "invisible";
      }
      return letterBox;
    });
    setletterBoxes(newLetterBoxes);
    setClickedLetters([...clickedLetters, letter]);
  };

  useEffect(() => {
    if (endPlay) {
      setletterBoxes([]);
    }
  }, [endPlay]);

  return (
    <div className={onPlay ? "blockDisplay" : "noDisplay"}>
      <ul className="alphabet">
        {letterBoxes.map((letter) => {
          return (
            <li
              key={letter.id}
              className={letter.visibility}
              onClick={() => clickLetterHandle(letter.id)}
            >
              {letter.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Letters;
