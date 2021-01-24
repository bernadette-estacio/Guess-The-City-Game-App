import React, { useState, useEffect } from "react";
import "./styles.scss";

const GuessCity = ({
  city,
  onPlay,
  endPlay,
  setEndPlay,
  isLostGame,
  clickedLetters,
}) => {
  const createCityBoxes = () => {
    const data = [];
    city
      .split("")
      .forEach((letter, i) =>
        data.push({ letter: letter, id: i, visibility: "hide", guessed: false })
      );
    return data;
  };

  const [cityBoxes, setCityBoxes] = useState(createCityBoxes);

  console.log("city is ", city);

  useEffect(() => {
    if (onPlay) {
      const clickedLettersLength = clickedLetters.length;
      const clickedLetter = clickedLetters[clickedLettersLength - 1];
      const newCityBoxes = cityBoxes.map((box) => {
        if (box.letter === clickedLetter) {
          box.visibility = "show";
          box.guessed = true;
        }
        return box;
      });
      setCityBoxes(newCityBoxes);
    }
  }, [onPlay, clickedLetters]);

  useEffect(() => {
    let count = 0;
    cityBoxes.forEach((box) => {
      if (box.guessed) {
        count++;
      }
    });

    if (count === cityBoxes.length) {
      setEndPlay(true);
    }
  }, [cityBoxes]);

  useEffect(() => {
    if (endPlay || isLostGame) {
      const newCityBoxes = cityBoxes.map((box) => {
        box.visibility = "show";
        return box;
      });
      setCityBoxes(newCityBoxes);
    }
  }, [endPlay, isLostGame]);

  return (
    <ul className="showCity">
      {cityBoxes.map((box) => {
        return (
          <li
            key={box.id}
            className={
              box.visibility +
              (onPlay ? " blockDisplay " : " noDisplay ") +
              (endPlay || isLostGame ? "flicker" : null)
            }
          >
            {box.letter}
          </li>
        );
      })}
    </ul>
  );
};

export default GuessCity;
