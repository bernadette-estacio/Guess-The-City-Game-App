import React, { useState } from "react";
import Header from "../Context/Header/header";
import StartBtn from "../Figures/Start/start";
import GuessCity from "../Figures/GuessCity/GuessCity";
import Prompt from "../Context/Prompt/prompt";
import Letters from "../Figures/Letters/letters";
import WordInput from "../Context/WordInput/wordInput";
import cities from "../MainContent/cities";
import "./styles.scss";

const city = cities[Math.floor(Math.random() * 20)].toUpperCase();

const MainContent = () => {
  const [onPlay, setOnPlay] = useState(false);
  const [lastStage, setLastStage] = useState(false);
  const [endPlay, setEndPlay] = useState(false);
  const [isLostGame, setIsLostGame] = useState(false);
  const [clickedLetters, setClickedLetters] = useState([]);

  return (
    <main>
      <Header />

      <StartBtn onPlay={onPlay} setOnPlay={setOnPlay} />

      <GuessCity
        city={city}
        onPlay={onPlay}
        endPlay={endPlay}
        setEndPlay={setEndPlay}
        isLostGame={isLostGame}
        clickedLetters={clickedLetters}
      />

      <Prompt
        city={city}
        onPlay={onPlay}
        endPlay={endPlay}
        isLostGame={isLostGame}
        clickedLetters={clickedLetters}
      />

      <Letters
        onPlay={onPlay}
        endPlay={endPlay}
        setLastStage={setLastStage}
        clickedLetters={clickedLetters}
        setClickedLetters={setClickedLetters}
      />

      <WordInput
        city={city}
        lastStage={lastStage}
        endPlay={endPlay}
        setEndPlay={setEndPlay}
        setIsLostGame={setIsLostGame}
      />
    </main>
  );
};

export default MainContent;
